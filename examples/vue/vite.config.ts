import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'vite-plugin-twc';

export default defineConfig({
  plugins: [vue(), tailwindcss()],
});
