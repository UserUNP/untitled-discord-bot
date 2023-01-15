import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";
import preact from "@astrojs/preact"

// https://astro.build/config
export default defineConfig( /** @type {import('astro').AstroUserConfig} */{
  output: "server",
  publicDir: "./src/assets",
  // base: "/untitled-discord-bot",
  site: "https://userunp.github.io",
  integrations: [tailwind(), preact({ compat: true })],
  adapter: deno()
});
