import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'worldcup-sweepstakes' to whatever you name your GitHub repository
export default defineConfig({
  plugins: [react()],
  base: '/worldcup-sweepstakes/',
})
