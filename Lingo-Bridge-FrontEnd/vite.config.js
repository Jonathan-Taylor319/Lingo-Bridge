import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],  // Enable the React plugin
  server: {
    proxy: {
    //   // Proxy API requests starting with "/api" to the Urban Dictionary API
    //   '/api': 'https://unofficialurbandictionaryapi.com',
    },
  },
});