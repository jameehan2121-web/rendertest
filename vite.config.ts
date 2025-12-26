import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),        // your main source
      "@shared": path.resolve(__dirname, "shared"),     // shared modules
      "@assets": path.resolve(__dirname, "client/public/assets"), // source assets
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    base: "/", // ensures assets load correctly
  },
  css: {
    postcss: {}, // will use postcss.config.js automatically
  },
  server: {
    host: "0.0.0.0",
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
