import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'remote-app',
        filename: 'remoteEntry.js',
        // Modules to expose
        exposes: {
          './App': './src/App.jsx',
        },
        shared: ['react','react-dom','@mui/icons-material','@mui/material','@emotion/styled','@emotion/react']
      })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
