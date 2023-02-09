import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  transpileDependencies: true,
  lintOnSave: false,

  server: {
    proxy: {
      "/v1": {
        "target": "http://localhost:8090",
        "pathRewrite": { '^/': '' },
        "changeOrigin": true,
        "ws": false,
      }
    }
  },

  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
})