import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://velmoren.github.io/btrust-dev/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        second: resolve(__dirname, 'second.html')
      },
    },
  },
})