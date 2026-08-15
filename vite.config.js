import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On the GitHub Pages project site the app is served from /bellahonigberlin/.
// Locally (dev) it stays at the root so the preview URL is clean.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/bellahonigberlin/' : '/',
  plugins: [react()],
  server: { port: 2209, host: true },
}))
