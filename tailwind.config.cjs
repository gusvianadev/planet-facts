/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundColor: {
				base: "var(--base)",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		logs: false,
	},
};