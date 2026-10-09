import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // ./ = relative path → works on ANY hosting (GitHub Pages, custom domain, subfolder)
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
