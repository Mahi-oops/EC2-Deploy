import { defineConfig } from 'vite'
// Try to import from '@vitejs/plugin-react', fallback to 'vite-plugin-react' if not found

import reactPlugin from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [reactPlugin()],
})