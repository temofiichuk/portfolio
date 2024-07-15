/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: {
		"tailwindcss": {},
		// "autoprefixer": {},
		"postcss-preset-env": {
			autoprefixer: { grid: false },
		},
	},
};

export default config;
