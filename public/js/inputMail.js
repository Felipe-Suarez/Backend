const inputEmail = document.getElementById("email");
const labelEmail = document.querySelector(".email-label");

//INPUT FIX BUG EFFECT
inputEmail.addEventListener("keyup", () => {
    if (inputEmail.value === "") {
        labelEmail.style = "top: 10px; color: #999; font-size: 18px";
    } else {
        labelEmail.style = "top: -20px; color: var(--color-accent); font-size: 14px";
    }
});