import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

const projectRootDir = path.resolve(__dirname);

export default defineConfig({
  base: '/',
  mode: 'development',
  plugins: [
    vue(),
  ],
  server: {
    // host: true,
    open: true,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(projectRootDir, 'src'),
      },
    ],
  },
});