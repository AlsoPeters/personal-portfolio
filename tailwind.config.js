/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				FiraCode: ["Fira Code", "monospace"],
				Montserrat: ["Montserrat", "sans-serif"],
				Calistoga: ["Calistoga", "cursive"],
				Oswald: ["Oswald", "sans-serif"],
			},
		},
	},
	plugins: [],
};
