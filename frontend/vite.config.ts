import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,
    port: 5173
  },
  resolve: {
    alias: {
      main: "/src/main/",
      sharedComponents: "/src/main/_sharedComponents",
      models: '/src/config/models',
      config: '/src/config/',
    },
  }
})
