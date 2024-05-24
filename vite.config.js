import { defineConfig } from 'vite'
import {fileURLToPath} from 'url';
import VitePluginHtmlEnv from 'vite-plugin-html-env';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      //{ find: '@', replacement: path.resolve(__dirname, '/src') }
      {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
    ],

  },
  plugins: [react(), VitePluginHtmlEnv()],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [],
    },
  },
})
