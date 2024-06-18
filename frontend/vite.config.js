import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensures Vite uses the root directory for index.html
  build: {
    outDir: 'dist',
  },
})
