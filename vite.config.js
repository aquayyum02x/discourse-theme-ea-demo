import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  plugins: [react()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: "src/react-entry.jsx",
      formats: ["es"],
      fileName: () => "ea-react-widgets.js",
      name: "EaReactWidgets",
    },
    outDir: "javascripts/discourse/react-dist",
    rollupOptions: {
      output: {
        chunkFileNames: "[name]-[hash].js",
      },
    },
  },
});
