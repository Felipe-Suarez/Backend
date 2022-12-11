// DELETE PRODUCT FROM CART
let cartId;

const productBtn = document.querySelectorAll('.product-btn')
const productContainer = document.querySelector('.product-container')

fetch('/userInfo/data').then(res => res.json()).then(data => cartId = data.id)

productContainer.addEventListener('click', async (e) => {
    productBtn.forEach(btn => {
        if (e.target === btn) {

            const productId = e.target.parentElement.attributes.name.nodeValue

            fetch(`/api/cart/${cartId}/productos/${productId}`, { method: 'DELETE' })
                .then(alert('Producto eliminado del carrito'))
                .then(window.location.href = "/cart")
        }
    })
})

// CART BUY
const cartBuy = document.querySelector('.cart-buy')

cartBuy?.addEventListener('click', () => {
    fetch('/cart/buy')
        .then(alert('Compra realizada exitosamente!'))
        .then(window.location.href = "/")
})