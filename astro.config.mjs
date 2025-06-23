import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import dotenv from "dotenv";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: cloudflare(),
  bodyParser: false,
});