import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/developer-portfolio/" : "/",
  build: {
    target: "es2022",
    sourcemap: true,
  },
}));
