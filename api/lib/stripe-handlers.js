import Stripe from 'stripe'

const PRICE_MAP = {
  'half-day': process.env.STRIPE_PRICE_HALF_DAY,
  'full-day': process.env.STRIPE_PRICE_FULL_DAY,
}

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY is not configured.')
  }
  return new Stripe(key)
}

function getSiteUrl() {
  return process.env.SITE_URL || 'http://localhost:5173'
}

function validateBooking(body) {
  const required = [
    'customerName',
    'customerEmail',
    'customerPhone',
    'charterType',
    'preferredDate',
    'partySize',
  ]

  for (const field of required) {
    if (!body[field] && body[field] !== 0) {
      return `Missing required field: ${field}`
    }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(body.customerEmail)) {
    return 'Invalid email address.'
  }

  if (Number(body.partySize) < 1 || Number(body.partySize) > 6) {
    return 'Party size must be between 1 and 6.'
  }

  const today = new Date().toISOString().split('T')[0]
  if (body.preferredDate < today) {
    return 'Preferred date cannot be in the past.'
  }

  return null
}

export async function handleCreateCheckoutSession(body) {
  const validationError = validateBooking(body)
  if (validationError) {
    return { status: 400, body: { error: validationError } }
  }

  const priceId = body.priceId || PRICE_MAP[body.charterType]
  if (!priceId) {
    return {
      status: 500,
      body: {
        error:
          'Stripe price is not configured. Set STRIPE_PRICE_HALF_DAY and STRIPE_PRICE_FULL_DAY.',
      },
    }
  }

  const stripe = getStripe()
  const siteUrl = getSiteUrl()

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: body.customerEmail,
    success_url: `${siteUrl}/book/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/book`,
    metadata: {
      customerName: String(body.customerName),
      customerEmail: String(body.customerEmail),
      customerPhone: String(body.customerPhone),
      preferredDate: String(body.preferredDate),
      partySize: String(body.partySize),
      charterType: String(body.charterType),
      charterTypeName: String(body.charterTypeName || body.charterType),
      notes: String(body.notes || ''),
    },
  })

  return { status: 200, body: { url: session.url, sessionId: session.id } }
}

export async function handleStripeWebhook(rawBody, signature) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    return { status: 500, body: { error: 'STRIPE_WEBHOOK_SECRET is not configured.' } }
  }

  const stripe = getStripe()
  let event

  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    return { status: 400, body: { error: `Webhook signature verification failed: ${err.message}` } }
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    console.log('[Stripe Webhook] Booking confirmed:', {
      sessionId: session.id,
      customerEmail: session.customer_email,
      metadata: session.metadata,
      amountTotal: session.amount_total,
    })
  }

  return { status: 200, body: { received: true } }
}
