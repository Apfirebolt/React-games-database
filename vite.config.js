import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  test: {
    // 1. Use jsdom for component rendering
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    globals: true,
  },
})