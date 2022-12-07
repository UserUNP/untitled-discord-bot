import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig( /** @type {import('astro').AstroUserConfig} */{
	publicDir: "./src/assets",
	base: "/untitled-discord-bot",
	site: "https://userunp.github.io",
	integrations: [tailwind()]
});
