// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose to all network interfaces
    port: 5173,
    strictPort: true,
    cors: true, // Enable CORS for extensions
    hmr: {
      overlay: true
    }
  },
  preview: {
    host: true,
    port: 4173,
    cors: true
  }
})