import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
        cv: resolve(__dirname, 'cv/index.html'),
        "cover-letter": resolve(__dirname, 'cv/cover-letter.html'),
      },
      base: '/cv/'
    },
  },
})