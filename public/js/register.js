import { regex } from './regex.js'

const phoneInputField = document.querySelector("#phone");

// INTERNATIONAL PHONE NUMBERS
window.intlTelInput(phoneInputField, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});


// EVENT INPUT PHONE
const labelPhone = document.querySelector("#label-phone");
phoneInputField.addEventListener('keyup', () => {
    let phoneNumber = phoneInputField.value
    const firstCharacter = phoneNumber[0]

    //VERIFY
    if (firstCharacter !== undefined) {
        phoneInputField.value = '+' + phoneNumber.replace(/\s/g, "").replace(/\D/g, "")
    }

    //REGEX
    const newPhoneNumber = phoneNumber.slice(1)
    if (regex.phone.test(newPhoneNumber) || phoneNumber === '') {
        labelPhone.style = 'color: #5264ae'
    } else {
        labelPhone.style = 'color: #f00'
    }
})

// EVENT INPUT AGE
const inputAge = document.querySelector("#age");

inputAge.addEventListener('keyup', () => {
    //VERIFY
    inputAge.value = inputAge.value.replace(/\s/g, "").replace(/\D/g, "")

    if (inputAge.value > 100) { inputAge.value = '' }
})

//EVENT INPUT NAME
const inputName = document.querySelector("#username");
const labelName = document.querySelector("#label-name");

inputName.addEventListener('keyup', () => {
    //REGEX
    if (regex.name.test(inputName.value) || inputName.value === '') {
        labelName.style = 'color: #5264ae'
    } else {
        labelName.style = 'color: #f00'
    }
})