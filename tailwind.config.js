/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				tetriary: 'var(--tetriary)',
				foreground: 'var(--foreground)',
				primary: 'var(--primary)',
				footerColor: 'var(--footerColor)',
			},
			fontColor: {
				base: 'var(--base)',
			},
		},
	},
	plugins: [],
};
