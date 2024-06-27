import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"icon-personal-info": "var(--icon-personal-info)",
				"icon-professional-info": "var(--icon-professional-info)",
				"icon-macbook": "var(--icon-macbook)",
				"icon-hobbies": "var(--icon-hobbies)",
				"active-page-color": "var(--active-page-border-color)",
			},
			dropShadow: {
				input: "var(--input-drop-shadow)",
			},
			backgroundColor: {
				background: "var(--background)",
			},
			textColor: {
				"base-color": "var(--text-color)",
			},
			margin: {
				base: "var(--margin-base)",
			},
			borderRadius: {
				base: "var(--border-radius-base)",
			},
			maxHeight: {
				app: "calc(100vh - var(--margin-base) * 2)",
			},
			maxWidth: {
				app: "calc(100vw - var(--margin-base) * 2)",
			},
			minWidth: {
				app: "var(--min-screen)",
			},
			borderColor: {
				"base-color": "var(--border-color-base)",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
export default config;
