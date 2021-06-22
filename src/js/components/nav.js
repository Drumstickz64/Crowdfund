const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav .hamburger");
const navMenu = document.querySelector(navToggle.dataset.target);

function toggleNavMenu() {
  navToggle.toggleAttribute("data-active");
  navMenu.toggleAttribute("data-hidden");
}

navToggle.addEventListener("click", toggleNavMenu);
