const formImg = document.querySelector('.card-img-box-form')

formImg.addEventListener('click', e => {
    const inputImg = e.target
    inputImg.addEventListener("change", handleFiles, false);
    function handleFiles() {
        formImg.submit()
    }
})