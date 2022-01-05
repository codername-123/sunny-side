const hamburger = document.getElementById("mobile-cta");
const body = document.getElementById("body");
const nav_item = document.querySelector(".nav-items");
const ismenu_open = false;
const a = document.querySelectorAll("a");
const button = document.getElementById("btn");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("rotation");
  nav_item.classList.toggle("show");
});

body.addEventListener("click", () => {
  if (event.target != hamburger && event.target != a && event.target != btn) {
    hamburger.classList.remove("rotation");
    nav_item.classList.remove("show");
  }
});

console.log(a);
