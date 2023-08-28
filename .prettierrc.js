/** @type {import("prettier").Config} */
export default {
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	printWidth: 80,
	quoteProps: "consistent",
	tabWidth: 4,
	trailingComma: "es5",
	useTabs: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
