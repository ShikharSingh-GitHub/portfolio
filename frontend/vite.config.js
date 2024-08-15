import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // This sets the correct base path for GitHub Pages
});
