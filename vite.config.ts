import { vlyPlugin } from "@vly-ai/integrations";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProd ? "/Blends-barbersshop/" : "/",

  plugins: [
    react(),
    vlyPlugin(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },

    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react-dom/client",
    ],
  },

  build: {
    sourcemap: false,

    // Let Vite/Rollup handle dependency chunking automatically.
    // The previous manualChunks configuration was producing
    // an invalid modulepreload containing bare "react-dom".
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },

    chunkSizeWarningLimit: 1000,
    target: "esnext",
    minify: "esbuild",

    // Avoid generating problematic modulepreload entries.
    modulePreload: {
      polyfill: false,
    },
  },

  optimizeDeps: {
    entries: ["index.html"],

    include: [
      "react",
      "react/jsx-runtime",
      "react-dom",
      "react-dom/client",
      "react-router",
      "@convex-dev/auth/react",
      "framer-motion",
    ],
  },

  server: {
    host: true,
    port: 5173,
    hmr: false,
  },
});