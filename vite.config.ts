import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@container": path.resolve(__dirname, "src/container"),
      "@data": path.resolve(__dirname, "src/data"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@typographies": path.resolve(__dirname, "src/typographies"),
      "@definitions": path.resolve(__dirname, "src/types"),
      "@public": path.resolve(__dirname, "public/assets"),
    },
  },
});
