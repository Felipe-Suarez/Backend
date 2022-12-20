const formImg = document.querySelector('.card-img-box-form')


//FEATURE TO CHANGE IMG IN PROFILE
formImg.addEventListener('click', e => {
    const inputImg = e.target
    inputImg.addEventListener("change", handleFiles, false);
    function handleFiles() {
        formImg.submit()
    }
})