import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7200,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
})
