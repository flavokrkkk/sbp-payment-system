import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    host: true,
    port: 5173,
  },
  esbuild: {
    target: "esnext",
    platform: "node",
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: ["lucide-react", "**/*.svg", "react-qrcode-logo"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@features": path.resolve(__dirname, "src/features"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@lib": path.resolve(__dirname, "src/lib"),
    },
  },
});
