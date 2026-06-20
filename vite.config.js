import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploying to the user site repo "TechIT0104.github.io" → served at the domain root.
// (If you ever switch to a project repo, set base to '/<repo-name>/'.)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
