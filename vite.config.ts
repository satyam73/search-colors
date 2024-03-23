import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
const root = resolve(__dirname, './');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(root),
      '@components': resolve(root, 'src/components'),
    },
  },
})
