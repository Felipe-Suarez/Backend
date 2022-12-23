const productBtn = document.querySelector('.product-btn')

let cartId = '';

//GET CART ID
fetch('/userInfo/data').then(res => res.json()).then(data => cartId = data.id)

productBtn.addEventListener('click', () => {
    const productId = productBtn.parentElement.parentElement.attributes.name.nodeValue

    fetch(`/api/cart/${cartId}/productos`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: productId
        })
    }).then(res => res.json()).then((data) => { //IF USER IS LOGGED
        if (cartId) {
            if (data.error) {
                alert(data.error)
            } else {
                alert('Producto agregado a tu carrito')
            }
        }
        else { window.location.href = '/login' }
    })
})