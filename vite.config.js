import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // VITE_BASE_PATH dipakai saat deploy ke GitHub Pages (subfolder repo).
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
