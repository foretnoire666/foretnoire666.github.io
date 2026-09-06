import { fileURLToPath, URL } from 'node:url'

import { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'node:path'

// https://vite.dev/config/

const defineConfig = ({ mode }: { mode: string }): UserConfigExport => {
  switch (mode) {
    case 'production':
      return production
    case 'development':
      return development
    default:
      throw new Error(`mode指定ミス mode: ${mode}`)
  }
}

const defaultSetting: UserConfigExport = {
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}

const production: UserConfigExport = {
  ...defaultSetting,
  esbuild: {
    drop: ['debugger'],
    pure: ['console.log'],
  },
}

const development: UserConfigExport = {
  ...defaultSetting,
}

const Vue = vue({
  template: {
    transformAssetUrls: {
      tags: {
        image: ['src'],
      },
    },
  },
})

const plugins = [Vue]

export default { defineConfig, plugins }
