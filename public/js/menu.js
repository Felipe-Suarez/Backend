const navIcon = document.querySelector(".nav-icon");
const navList = document.querySelector(".nav-list");

//BURGER MENU EFFECT

navIcon.addEventListener("click", () => {
    navIcon.classList.toggle('nav-icon-down')
    navList.classList.toggle('nav-list-open')
});

window.addEventListener('click', (e) => {
    if (e.target !== navIcon) {
        navIcon.classList.remove('nav-icon-down')
        navList.classList.remove('nav-list-open')
    }
})