// DELETE PRODUCT FROM CART
const product = document.querySelectorAll('.product')

const productBtn = document.querySelectorAll('.product-btn')
const productContainer = document.querySelector('.product-container')

const btnSum = document.querySelectorAll('.btn-sum')
const productQty = document.querySelectorAll('.product-qty')
const btnRest = document.querySelectorAll('.btn-rest')
const btnConfirm = document.querySelectorAll('.product-edit-confirm')

const totalPrice = document.querySelector('.cart-buy-total')

let cartId;
let cartProducts;

const updatePrice = () => {
    let price = 0;
    cartProducts.forEach(product => price += product.price * product.qty)
    totalPrice.textContent = price
}

(async function () {
    await fetch('/userInfo/data').then(res => res.json()).then(data => {
        cartId = data.id
        cartProducts = data.productos
    })

    updatePrice()
})()

productContainer.addEventListener('click', async (e) => {
    productBtn.forEach((btn, index) => {
        //BORRAR PRODUCTO
        if (e.target === btn) {
            const productId = product[index].attributes.name.nodeValue
            fetch(`/api/cart/${cartId}/productos/${productId}`, { method: 'DELETE' })
                .then(alert('Producto eliminado del carrito'))
                .then(window.location.href = "/cart")
        }
    })

    productQty.forEach((input, index) => {
        //SUMAR CANTIDAD
        if (e.target === btnSum[index]) {
            if (input.value < 10) {
                input.value = ++input.value
                btnConfirm[index].style = 'display: block'
            }
        }
        //RESTAR CANTIDAD
        if (e.target === btnRest[index]) {
            if (input.value > 1) {
                input.value = --input.value
                btnConfirm[index].style = 'display: block'
            }
        }
        // GUARDAR CANTIDAD 
        if (e.target === btnConfirm[index]) {
            if (input.value >= 1 && input.value <= 10) {
                const productId = product[index].attributes.name.nodeValue
                fetch(`/api/cart/${cartId}/productos`, {
                    method: 'put',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id: productId,
                        qty: input.value
                    })
                }).then(res => res.json()).then(
                    data => data.error && alert(data.error) || (window.location.href = '/cart')
                )
                updatePrice()
                btnConfirm[index].style = 'display: none'
            } else {
                alert('No se pueden agregar mas cantidad de este producto')
            }
        }
    })
})

// CART BUY
const cartBuy = document.querySelector('.cart-buy')

cartBuy?.addEventListener('click', () => {
    fetch('/cart/buy', {
        method: 'post'
    }).then(alert('Compra realizada exitosamente!')).then(data => {
        if (data) window.location.href = '/cart'
    })
})