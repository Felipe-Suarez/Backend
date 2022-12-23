const productBtn = document.querySelectorAll('.product-btn')
const productContainer = document.querySelector('.product-container')

const productDescription = document.querySelectorAll('.product-description')

let cartId = '';

//GET CART ID
fetch('/userInfo/data').then(res => res.json()).then(data => cartId = data.id)

productContainer.addEventListener('click', (e) => {

    //ADD PRODUCTS IN CART
    productBtn.forEach(btn => {
        if (e.target === btn) {
            const productId = e.target.parentElement.attributes.name.nodeValue

            fetch(`/api/cart/${cartId}/productos`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: productId
                })
            }).then(() => { //IF USER IS LOGGED
                if (cartId) alert('Producto agregado a tu carrito')
                else { window.location.href = '/login' }
            })

        }
    })

    // SEE PRODUCT DESCRIPTION
    productDescription.forEach(btn => {
        if (e.target === btn) {
            const productId = e.target.parentElement.attributes.name.nodeValue

            window.location.href = `/productos/${productId}`
        }
    })
})