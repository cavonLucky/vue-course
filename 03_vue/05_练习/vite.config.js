/*
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-28 15:18:24
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-28 15:24:55
 * @FilePath: /vue-course/03_vue/05_练习/vite.config.js
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    reactivityTransform: true
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
