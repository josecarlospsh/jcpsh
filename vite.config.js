import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      output: {
        entryFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});
