/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,            // pour ne pas importer 'describe', 'it', etc.
    environment: "jsdom",     // simule le DOM pour tester des composants React
    setupFiles: "./src/test/setup.ts", // fichier d'initialisation
    include: ["src/**/*.{test,spec}.{ts,tsx}"], // convention de nommage des tests
  },
})
