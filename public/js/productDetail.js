const productBtn = document.querySelector('.product-btn')
const product = document.querySelector('.product')

let cartId;

//GET CART ID
fetch('/userInfo/data').then(res => res.json()).then(data => cartId = data.id)

productBtn.addEventListener('click', () => {
    const productId = product.attributes.name.nodeValue

    if (cartId) {
        fetch(`/api/cart/${cartId}/productos`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: productId
            })
        }).then(res => res.json()).then((data) => { //IF USER IS LOGGED
            if (data.error) {
                alert(data.error)
            } else {
                alert(data.msg)
            }
        })
    } else { window.location.href = '/login' }

})