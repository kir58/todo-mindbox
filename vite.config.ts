import { defineConfig, splitVendorChunkPlugin, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { InlineConfig } from 'vitest/node.js';
import { configDefaults } from 'vitest/config';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}
// https://vitejs.dev/config/
export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'shared/*'],
    environment: 'jsdom',
    globals: true,
    css: true,
    setupFiles: ['./tests/setup.ts'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '!**/excludeMe.ts'],
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
