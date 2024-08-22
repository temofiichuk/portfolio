// loader
document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("body").classList.add("loaded");
});

if (window.matchMedia("(prefers-color-scheme: dark)") && !localStorage.getItem("color-theme")) {
	localStorage.setItem("color-theme", "dark");
}

// dark mode switcher
let themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
let themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
	localStorage.getItem("color-theme") === "dark" ||
	(!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	themeToggleLightIcon.classList.remove("hidden");
} else {
	themeToggleDarkIcon.classList.remove("hidden");
}

let themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
	// toggle icons inside button
	themeToggleDarkIcon.classList.toggle("hidden");
	themeToggleLightIcon.classList.toggle("hidden");

	// if set via local storage previously
	if (localStorage.getItem("color-theme")) {
		if (localStorage.getItem("color-theme") === "light") {
			document.documentElement.classList.add("dark");
			localStorage.setItem("color-theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("color-theme", "light");
		}

		// if NOT set via local storage previously
	} else {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("color-theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("color-theme", "dark");
		}
	}
});

// init App
const app = new AppUsers();
app._init();