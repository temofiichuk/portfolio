import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
				"app": "calc(100vh - var(--margin-base) * 2)",
				"page-wrapper": "calc(100vh - (var(--margin-base) * 2) - (var(--min-elm-size) * 2))",
			},
			maxWidth: {
				"app": "calc(100vw - var(--margin-base) * 2)",
				"page-wrapper": "calc(100vw - var(--margin-base) * 2 - var(--min-elm-size))",
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
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".container-page": {
					"maxWidth": "100%",
					"@media (min-width: 640px)": {
						maxWidth: "600px",
					},
					"@media (min-width: 768px)": {
						maxWidth: "700px",
					},
					"@media (min-width: 1024px)": {
						maxWidth: "900px",
					},
					"@media (min-width: 1280px)": {
						maxWidth: "1200px",
					},
					"@media (min-width: 1536px)": {
						maxWidth: "1450px",
					},
				},
			});
		}),
	],
};
export default config;
