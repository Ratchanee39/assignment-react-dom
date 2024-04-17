import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // เพิ่มการ import resolve จาก path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@function": path.resolve(__dirname, "src/function"),
      "@new": path.resolve(__dirname, "src/components/new"),
      "@course_router": path.resolve(__dirname, "src/components/course_router"),
    },
    extensions: ['.ts', '.tsx']
  },
  css: {
    modules: false
  },
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
});
