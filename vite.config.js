import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CHANGE <your-username> below when you set up the repo URL, or keep base as shown if repo name is minaxi-foundation
export default defineConfig({
  plugins: [react()],
  base: '/minaxi-foundation/',
})
