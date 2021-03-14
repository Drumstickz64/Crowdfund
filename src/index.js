const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav .hamburger");
const navMenu = document.querySelector(navToggle.dataset.target);

navToggle.addEventListener("click", () => {
	navToggle.toggleAttribute("data-active");
	navMenu.toggleAttribute("data-hidden");
});