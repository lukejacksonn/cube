import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [mkcert(), preact()],
  build: {
    outDir: "docs",
  },
});
