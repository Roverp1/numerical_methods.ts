/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

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

  optimizeDeps: {
    esbuildOptions: {
      // 👉 поліфіл для "global"
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
});
