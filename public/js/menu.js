const navIcon = document.querySelector(".nav-icon");
const navList = document.querySelector(".nav-list");

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