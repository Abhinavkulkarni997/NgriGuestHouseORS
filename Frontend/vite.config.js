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
    },
    proxy:{
      "/api":{
           target:'http://localhost:5000', // Use this for local development
        // target:'http://backend:5000', // Use this when running with Docker
        changeOrigin:true,
        secure:false,
      }
    }
  },
  preview: {
    host: true,
    port: 4173,
    cors: true
  }
})