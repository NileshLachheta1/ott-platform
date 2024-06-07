import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ott-platform/client",
  server: {
    proxy: {
      "/api": "http://localhost:5000"
    }
  }
})
