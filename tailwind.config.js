module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			gridTemplateColumns: {
				check: "900px 120px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
