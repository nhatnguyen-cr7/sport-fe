import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000, // Sử dụng cổng từ biến môi trường hoặc mặc định là 3000
    strictPort: true, // Nếu cổng đã được sử dụng, Vite sẽ thoát lỗi
  },
});
