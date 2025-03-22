const menu = document.querySelector("nav ul");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("nav-active");
});