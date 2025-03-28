import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@store": "/src/store",
      "@services": "/src/services",
      "@assets": "/src/assets",
      "@config": "/src/config",
    },
  },
})
