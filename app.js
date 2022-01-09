const hamburger = document.querySelector(".hamburger");
const navbar_items = document.querySelector(".navbar-items");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("rotation");
  navbar_items.classList.toggle("hide-mobile-menu");
});
