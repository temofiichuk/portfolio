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
				"page-wrapper": "calc(100vh - var(--margin-base) * 2 - var(--min-elm-size) * 2)",
			},
			height: {
				"app": "calc(100vh - var(--margin-base) * 2)",
				"mobile-page-wrapper": "calc(100vh - var(--margin-base) * 2 - var(--min-elm-size))",
			},
			maxWidth: {
				"app": "calc(100vw - var(--margin-base) * 2)",
				"page-wrapper": "calc(100vw - var(--margin-base) * 2)",
			},
			width: {
				app: "calc(100vw - var(--margin-base) * 2)",
			},
			minWidth: {
				app: "var(--min-screen)",
			},
			borderColor: {
				"base-color": "var(--border-color-base)",
			},
			fontSize: {
				"sm": "14px",
				"base": "16px",
				"lg": "20px",
				"xl": "24px",
				"2xl": "32px",
			},
		},
	},
	darkMode: "class",
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".container-page": {
					"maxWidth": "calc(100% - 30px)",
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
				".scrollbar-base": {
					"scrollbar-color": "transparent #607b96",
					"&::-webkit-scrollbar": {
						"width": "12px",
						"border-left": "1px solid var(--border-color-base)",
					},
					"&::-webkit-scrollbar-thumb": {
						"background-color": "#607b96",
						"border-left": "1px solid var(--border-color-base)",
						"border-right": "1px solid var(--border-color-base)",
					},
					"@media (max-width: 1024px)": {
						"&::-webkit-scrollbar": {
							width: "6px",
						},
					},
				},
			});
		}),
	],
};
export default config;
