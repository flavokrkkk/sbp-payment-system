import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import svgr from "vite-plugin-svgr";
import vitePluginBundleObfuscator from "vite-plugin-bundle-obfuscator";
export default defineConfig({
  base: "/payment/",
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
    vitePluginBundleObfuscator({
      enable: true,
      log: false,
      autoExcludeNodeModules: true,
      threadPool: true,
      options: {
        compact: true,
        controlFlowFlattening: true,
        identifierNamesGenerator: "hexadecimal",
        deadCodeInjection: false,
        debugProtection: false,
        disableConsoleOutput: false,
        selfDefending: true,
        simplify: true,
        stringArray: false,
        stringArrayCallsTransform: false,
        stringArrayEncoding: [],
        stringArrayThreshold: 0.75,
        unicodeEscapeSequence: false,
      },
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
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "[name]-[hash].js",
      },
    },
  },
});
