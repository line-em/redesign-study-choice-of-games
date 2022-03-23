const themeToggle = document.querySelector('.theme-toggle input[type="checkbox"]');
const themeContainer = document.querySelector(".theme-toggle-wrapper");
const hideTheme = document.querySelector("#hide-theme-toggle");
const hideSearch = document.getElementById("hide-toggle");
const searchElement = document.getElementById("hide-search-element");
const ourgames = document.getElementById("ourgames");

const userTheme =
	localStorage.getItem("data-theme") ||
	(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (userTheme) {
	document.documentElement.setAttribute("data-theme", userTheme);
}

function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("data-theme", "dark");
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("data-theme", "light");
	}
}

function openClose(x) {
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

themeToggle.addEventListener("change", switchTheme, false);

if (ourgames) {
	hideSearch.addEventListener("click", () => {
		openClose(searchElement);
	});
}
hideTheme.addEventListener("click", () => {
	openClose(themeContainer);
});
