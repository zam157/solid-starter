import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
})
