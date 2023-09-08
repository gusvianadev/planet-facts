/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundColor: {
				base: "var(--base)",
			},
			scale: {
				"surface-base": "0.40",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		logs: false,
	},
};
