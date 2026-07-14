import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/GWBL1-Digital-Portfolio/",
  plugins: [react(), tailwindcss()],
})
