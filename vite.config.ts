import react from "@vitejs/plugin-react"
import path, { resolve } from "path"
import { fileURLToPath } from "url"
import { defineConfig } from "vite"
import compression from "vite-plugin-compression"
import svgr from "vite-plugin-svgr"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const outDir = resolve(__dirname, "dist")

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "gzip" }),
    svgr({
      svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
      include: "**/*.svg",
    }),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString()
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})
