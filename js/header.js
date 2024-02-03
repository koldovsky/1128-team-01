const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");


btnSub.addEventListener("click", () => {
    body.classList.toggle("fixed");
    header.classList.toggle("responsive");
})

