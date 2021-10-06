const hamburg = document.querySelector(".menu");
const menu = document.querySelector(".nav-links");

hamburg.addEventListener("click", () => {
	menu.classList.toggle("show-navs");
	hamburg.classList.toggle("open");
});
