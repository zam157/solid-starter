import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import suidPlugin from '@suid/vite-plugin'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    solidPlugin(),
    Unocss(),
    suidPlugin(),
    AutoImport({
      imports: [
        'solid-js',
        '@solidjs/router',
      ],
      dts: true,
      eslintrc: {
        enabled: true,
      },
    }),
    Pages(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
