import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Simulator at / (English) and /fr/ (French), plus the build guide in both languages
export default defineConfig({
  // Served from https://<user>.github.io/treadmill-jump-lab/
  base: process.env.GITHUB_PAGES ? '/treadmill-jump-lab/' : '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fr: resolve(__dirname, 'fr/index.html'),
        build: resolve(__dirname, 'build.html'),
        buildFr: resolve(__dirname, 'fr/build.html'),
      },
    },
  },
});
