import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  base: "./", // ← MUDE PARA "./" (ponto barra)
  build: {
    outDir: "docs",
    sourcemap: false,
  },
  server: {
    port: 5173,
    host: true,
  },
});
