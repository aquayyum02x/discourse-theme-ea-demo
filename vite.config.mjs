import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Output goes to assets/ (declared in about.json) rather than javascripts/.
// Files under javascripts/ become Discourse theme fields, capped at 1,048,576 characters.
// Files under assets/ become Uploads, capped at MAX_ASSET_FILE_SIZE (8 MB).
export default defineConfig({
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  plugins: [react()],
  build: {
    emptyOutDir: false,
    outDir: "assets",
    cssCodeSplit: false,
    sourcemap: false,
    target: "es2022",
    lib: {
      entry: "src/react/index.jsx",
      formats: ["es"],
      fileName: () => "ea-react-island.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: "ea-react-island.[ext]",
        // Single file keeps every chunk URL resolvable without a runtime base path.
        inlineDynamicImports: true,
      },
    },
  },
});
