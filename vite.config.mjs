import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const generatedThemeStylesheet = resolve(
  process.cwd(),
  "stylesheets/components/ea-paloma-generated.scss"
);

// Discourse accepts CSS/SCSS under stylesheets/, but not as a theme upload asset. Vite extracts
// Paloma CSS, this plugin writes it to the normal theme stylesheet tree, and removes the .css
// asset so the import bundle contains JavaScript only.
function exportPalomaStylesheet() {
  return {
    name: "export-paloma-stylesheet",
    writeBundle(outputOptions) {
      const outputDirectory = resolve(process.cwd(), outputOptions.dir || "assets");
      const stylesheets = readdirSync(outputDirectory).filter((fileName) =>
        fileName.endsWith(".css")
      );

      if (stylesheets.length !== 1) {
        throw new Error(
          `[ea-react] expected one extracted stylesheet, found ${stylesheets.length}`
        );
      }

      const [fileName] = stylesheets;
      const stylesheetPath = resolve(outputDirectory, fileName);
      mkdirSync(resolve(process.cwd(), "stylesheets/components"), { recursive: true });
      writeFileSync(generatedThemeStylesheet, readFileSync(stylesheetPath));
      rmSync(stylesheetPath);
    },
  };
}

// Output goes to assets/ (declared in about.json) rather than javascripts/.
// Files under javascripts/ become Discourse theme fields, capped at 1,048,576 characters.
// Files under assets/ become Uploads, capped at MAX_ASSET_FILE_SIZE (8 MB).
export default defineConfig({
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  plugins: [react(), exportPalomaStylesheet()],
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
