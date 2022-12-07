let cartId = '';

const productBtn = document.querySelectorAll('.product-btn')
const productContainer = document.querySelector('.product-container')

fetch('/userInfo/data').then(res => res.json()).then(data => cartId = data.id)

productContainer.addEventListener('click', (e) => {
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
            }).then(
                alert('Producto agregado a tu carrito')
            )

        }
    })
})
