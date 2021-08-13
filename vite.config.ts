import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '/@': resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "/@/assets/scss/variable.scss";
          @import "/@/assets/scss/mixin.scss";
        `,
      },
    },
  },
  build: {
    rollupOptions: {
      plugins: [process.env.npm_config_report && visualizer({ open: true })],
    },
  },
});
