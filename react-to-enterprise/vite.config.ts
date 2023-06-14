import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      overlay: { initialIsOpen: false },
      typescript: true,
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api-server/': '...',
      '/authorization/': '...',
    },
  },
})
