import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'layout',
        filename: 'remoteEntry.js',
        // Modules to expose
        exposes: {
          './App': './src/App.jsx',
        },
        shared: ['react','react-dom']
      })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
