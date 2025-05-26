/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
  },

  server: {
    port: 8888,
    strictPort: true,
  },
});
