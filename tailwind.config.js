/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts}'],
	theme: {
		extend: {
			colors: {
				gold: '#c6a965',
				wheat: '#ffe3ad',
				lightBrown: '#b8a379',
				mediumBrown: '#9f8962',
				darkestBrown: '#2e2e2e',
				almostBlack: '#181818',
			},
		},
	},
	plugins: [],
};
