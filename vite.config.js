import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On Vercel, process.env.VERCEL is defined.
// On GitHub Pages, it's not, so we keep the repo subpath.
const isVercel = !!process.env.VERCEL

export default defineConfig({
  plugins: [react()],
  base: isVercel ? '/' : '/minaxi-foundation/',
})

