import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://velmoren.github.io/btrust-dev/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
        faq: resolve(__dirname, 'faq.html'),
        forex: resolve(__dirname, 'forex.html'),
        program: resolve(__dirname, 'program.html'),
        futures: resolve(__dirname, 'futures.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})