/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
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
				'palablu':
				{
					100: '#F2F8FF',
					200: '#C1E2FF',
					300: '#8FCEFB',
					400: '#5CBDF3',
					500: '#1C37E8',
					600: '#0E8CB4',
					700: '#036D85',
					800: '#004B55',
					900: '#002426',
				},
			},
		}
	},
	plugins: [require('tailwind-scrollbar')]
};
