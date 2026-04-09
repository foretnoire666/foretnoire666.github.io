import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  switch (mode) {
    case "production":
      return production()
    case "develop":
      return develop()
    default:
      throw new Error(`mode指定ミス mode: ${mode}`)
  }
})

const production = () => {

}

const develop = () => {
  
}