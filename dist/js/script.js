const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const theme = document.querySelector(".ri-moon-line");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("menu_active");
  theme.classList.toggle("theme_dark");
});

window.addEventListener("scroll", () => {
  hamburger.classList.remove("is-active");
  menu.classList.remove("menu_active");
});
