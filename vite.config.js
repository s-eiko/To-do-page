import { defineConfig } from 'vite'
import { vitePlugin as remix } from "@remix-run/dev"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), remix()],
})
