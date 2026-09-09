import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rapha-albino.com.br",
  output: "static",
  publicDir: "./assets",
  integrations: [sitemap()],
});
