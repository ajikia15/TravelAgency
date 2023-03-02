/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'moss': {
					100: '#F2FFFA',
					200: '#C7D393',
					300: '#85EFB8',
					400: '#48C97F',
					500: '#14803C',
					600: '#076925',
					700: '#025316',
					800: '#003D0C',
					900: '#002605',
				},
			},
		}
	},
	plugins: [require('tailwind-scrollbar')]
};
