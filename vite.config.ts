import { defineConfig, splitVendorChunkPlugin, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { InlineConfig } from 'vitest/node.js';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}
// https://vitejs.dev/config/
export default defineConfig({
  test: {
    exclude: [],
    environment: 'jsdom',
    globals: true,
    css: true,
    setupFiles: ['./tests/setup.ts'],
    // testMatch: ['./tests/**/*.test.tsx'],
  },
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
} as VitestConfigExport);
