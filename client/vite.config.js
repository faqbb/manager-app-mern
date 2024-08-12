import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    proxy: {
      '/users': {
        target: 'http://localhost:2020',
        changeOrigin: true
      },
      '/sayhitofront': {
        target: 'http://localhost:2020',
        changeOrigin: true
      },
      '/logs': {
        target: 'http://localhost:2020',
        changeOrigin: true
      },
        '/socket.io': {
          target: 'http://localhost:2020',
          ws: true,
          changeOrigin: true
          },
    }
  }
})
