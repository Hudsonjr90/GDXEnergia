import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { quasarOptions } from './quasar-options'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vueDevTools(),

    vue({
      template: {
        transformAssetUrls,
      },
    }),

    quasar({
      ...quasarOptions,

      sassVariables: fileURLToPath(
        new URL(
          './src/assets/styles/quasar-variables.sass',
          import.meta.url,
        ),
      ),
    }),
  ],

  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})