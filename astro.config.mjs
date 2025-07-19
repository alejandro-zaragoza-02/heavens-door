// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es'
  },
  site: 'https://alejandro-zaragoza-02.github.io/heavens-door/',
  build: {
    assets: '_astro',
  },
  output: 'static',
});
