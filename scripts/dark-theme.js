const themeToggle = document.querySelector('.theme-toggle input[type="checkbox"]');
const themeToggleBox = document.querySelector(".theme-toggle-wrapper");
const filter = document.querySelector(".search");

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
