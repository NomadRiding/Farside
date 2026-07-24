import { handleCreateCheckoutSession } from '../lib/stripe-handlers.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const result = await handleCreateCheckoutSession(req.body)
    return res.status(result.status).json(result.body)
  } catch (err) {
    console.error('[create-checkout-session]', err)
    return res.status(500).json({ error: err.message || 'Internal server error' })
  }
}
