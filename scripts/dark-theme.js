const toggleSwitch = document.querySelector('.theme-toggle input[type="checkbox"]');

const themeSwitchBox = document.querySelector(".theme-toggle-wrapper");
const filter = document.querySelector(".search");

function openClose(x) {
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
	} else {
		document.documentElement.setAttribute("data-theme", "light");
	}
}

toggleSwitch.addEventListener("change", switchTheme, false);
