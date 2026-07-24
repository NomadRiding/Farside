import { handleStripeWebhook } from '../lib/stripe-handlers.js'

export const config = {
  api: {
    bodyParser: false,
  },
}

async function readRawBody(req) {
  const chunks = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const rawBody = await readRawBody(req)
    const signature = req.headers['stripe-signature']
    const result = await handleStripeWebhook(rawBody, signature)
    return res.status(result.status).json(result.body)
  } catch (err) {
    console.error('[stripe-webhook]', err)
    return res.status(500).json({ error: err.message || 'Internal server error' })
  }
}
