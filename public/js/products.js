const product = document.querySelectorAll('.product')

const productBtn = document.querySelectorAll('.product-btn')
const productContainer = document.querySelector('.product-container')

const productDescription = document.querySelectorAll('.product-description')

let cartId = '';

//GET CART ID
fetch('/userInfo/data').then(res => res.json()).then(data => cartId = data.id)

productContainer.addEventListener('click', (e) => {

    //ADD PRODUCTS IN CART
    productBtn.forEach((btn, index) => {
        if (e.target === btn) {
            const productId = product[index].attributes.name.nodeValue

            fetch(`/api/cart/${cartId}/productos`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: productId
                })
            }).then(res => res.json()).then((data) => { //IF USER IS LOGGED
                if (cartId) {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        alert(data.msg)
                    }
                }
                else { window.location.href = '/login' }
            })

        }
    })

    // SEE PRODUCT DESCRIPTION
    productDescription.forEach((btn, index) => {
        if (e.target === btn) {
            const productId = product[index].attributes.name.nodeValue

            window.location.href = `/productos/${productId}`
        }
    })
})