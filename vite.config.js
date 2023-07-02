import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //解决打包访问静态资源路径问题
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js' //解决使用多语言警告问题
    }
  },
  server: {
    port: 80
  },
  //配置代理
  /* server: {
    proxy: {
      '/pc': {
        target: 'https://le3-api.game.bilibili.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // /api 替换 空
      }
    }
  } */
})
