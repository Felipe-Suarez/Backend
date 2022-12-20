//REGEX TO INPUTS NAME, IN LOGIN AND REGISTER, AND PHONE, IN REGISTER

const regex = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    phone: /^\d{7,14}$/
}

export { regex }