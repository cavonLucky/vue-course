/*
 * @Author: chengxy666 425247833@qq.com
 * @Date: 2023-05-23 12:28:49
 * @LastEditors: chengxy666 425247833@qq.com
 * @LastEditTime: 2023-05-23 12:37:39
 * @FilePath: /vue-course/03_vue/04_模板/vite.config.js
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
