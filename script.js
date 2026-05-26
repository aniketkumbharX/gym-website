// FULL script.js

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  navbar.classList.remove("active");

});