import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Two pages: / (English) and /fr/ (French), sharing the same scripts
export default defineConfig({
  // Served from https://<user>.github.io/treadmill-jump-lab/
  base: process.env.GITHUB_PAGES ? '/treadmill-jump-lab/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fr: resolve(__dirname, 'fr/index.html'),
      },
    },
  },
});
