const theme = {
	'pre[class*="language-"]': {
		background: "var(--background)",
		color: "var(--pre-color)",
		maxWidth: "100%",
		fontSize: "var(--font-size)",
	},
	'code[class*="language-"]': {
		whiteSpace: "wrap",
		width: "max-content",
		maxWidth: "100%",
		fontSize: "inherit",
	},
	"comment": {
		color: "var(--comment)",
	},
	"property": {
		color: "var(--property)",
	},
	"variable": {
		color: "var(--variable)",
	},
	"property-access": {
		color: "var(--property-access)",
	},
	"string": {
		color: "var(--string)",
	},
	"constant": {
		color: "var(--variable)",
	},
	"keyword": {
		color: "var(--keyword)",
	},
	"operator": {
		color: "var(--operator)",
	},
	"linenumber": {
		color: "var(--linenumber)",
	},
	"react-syntax-highlighter-line-number": {},
};

export default theme;
