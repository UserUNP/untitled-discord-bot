/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		colors: {
			bg: "#090809",
			fg: "#0094C6",
			dark: "#141414",
			danger: "#FF0035",
			glint: "#FFB20F",
			light: "#E6E8E6"
		},
		fontFamily: {
			serif: ["Montserrat", "Tahoma", "Geneva", "Verdana", "sans-serif"],
			sans: ["IBM Plex Sans", "Tahoma", "Geneva", "Verdana", "sans-serif"],
			mono: ["IBM Plex Mono", "Courier", "monospace"]
		}
	},
	plugins: [],
}
