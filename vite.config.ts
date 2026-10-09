import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages deployment: change 'short7' to your actual repository name
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  base: isGitHubPages ? '/short7/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
