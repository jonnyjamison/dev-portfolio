// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jonnyjamison.codes",
  base: "/dev-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
