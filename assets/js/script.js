// Navbar variables
const nav = document.querySelector(".mobile-nav"),
    navMenuBtn = document.querySelector(".nav-menu-btn"),
    navCloseBtn = document.querySelector(".nav-close-btn");

// A navigation toggle function is declared
const navToggleFunction = () => nav.classList.toggle("active");
navMenuBtn.addEventListener("click", navToggleFunction);
navCloseBtn.addEventListener("click", navToggleFunction);
/* This program was developed by ©I-am-Programming-the-World */