import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import {
  handleCreateCheckoutSession,
  handleStripeWebhook,
} from './api/lib/stripe-handlers.js'

function apiDevPlugin(env) {
  Object.assign(process.env, env)

  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/')) {
          return next()
        }

        const sendJson = (status, body) => {
          res.statusCode = status
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(body))
        }

        const readBody = () =>
          new Promise((resolve, reject) => {
            const chunks = []
            req.on('data', (chunk) => chunks.push(chunk))
            req.on('end', () => {
              const raw = Buffer.concat(chunks)
              if (req.url === '/api/stripe-webhook') {
                resolve(raw)
              } else {
                try {
                  resolve(raw.length ? JSON.parse(raw.toString()) : {})
                } catch {
                  reject(new Error('Invalid JSON body'))
                }
              }
            })
            req.on('error', reject)
          })

        try {
          if (req.url === '/api/create-checkout-session' && req.method === 'POST') {
            const body = await readBody()
            const result = await handleCreateCheckoutSession(body)
            return sendJson(result.status, result.body)
          }

          if (req.url === '/api/stripe-webhook' && req.method === 'POST') {
            const rawBody = await readBody()
            const signature = req.headers['stripe-signature']
            const result = await handleStripeWebhook(rawBody, signature)
            return sendJson(result.status, result.body)
          }

          if (req.method === 'OPTIONS') {
            res.statusCode = 204
            return res.end()
          }

          return sendJson(404, { error: 'Not found' })
        } catch (err) {
          console.error('[api-dev]', err)
          return sendJson(500, { error: err.message || 'Internal server error' })
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] }), apiDevPlugin(env)],
  }
})
