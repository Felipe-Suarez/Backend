import { indentifyInput, useBody, resetValue } from '../js/adminUtils.js'

const productBtn = document.querySelectorAll('.product-btn')
const productContainer = document.querySelector('.product-container')
const productBox = document.querySelectorAll('.product-box-position')

const productDescription = document.querySelectorAll('.product-box-description')
const productWebkit = document.querySelectorAll('.product-webkit')
const productWebkitText = document.querySelectorAll('.product-webkit-text')
const webkitClose = document.querySelectorAll('.product-webkit-close')
const descriptionSaveBtn = document.querySelectorAll('.product-description-save')
const descriptionCancelBtn = document.querySelectorAll('.product-description-cancel')

const product = document.querySelectorAll('.product')

// DELETE
const deleteProduct = (e) => {
    productBtn.forEach(btn => {
        if (e.target === btn) {

            const productId = e.target.parentElement.attributes.name.nodeValue

            fetch(`/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(
                alert('Producto eliminado de la tienda')
            ).then(
                window.location.href = "/admin"
            )

        }
    })
}

// EDIT PRODUCTS
const editInput = (e, editBtn, productInput, saveBox) => {
    if (e.target === editBtn || e.target === productInput) {
        productInput.focus();
        editBtn.style = 'display: none';
        saveBox.style = 'display: inline-block';
    }
}

const saveConfirm = (e, editConfirm, editBtn, saveBox, box, productInput) => {
    if (e.target === editConfirm) {
        editBtn.style = 'display: inline-block';
        saveBox.style = 'display: none';

        let productId = box.parentElement.parentElement.attributes.name.nodeValue

        fetch(`/api/products/${productId}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: useBody(indentifyInput, productInput)
        }).then(res => res.json()).then(data => {
            if (data?.error) {
                alert(data.error)
                window.location.href = '/admin'
            } else {
                alert(data)
            }
        })
    }
}

const saveCancel = (e, editCancel, editBtn, saveBox, box, productInput) => {
    if (e.target === editCancel) {
        editBtn.style = 'display: inline-block';
        saveBox.style = 'display: none';

        let productId = box.parentElement.parentElement.attributes.name.nodeValue
        fetch(`/api/products/${productId}`).then(res => res.json())
            .then(data => resetValue(indentifyInput, productInput, data))
    }
}

// INIT
const editProduct = (e) => {
    productBox.forEach(box => {
        const productInput = box.children[0]
        const editBtn = box.children[1]

        const saveBox = box.children[2]
        const editConfirm = saveBox.children[0]
        const editCancel = saveBox.children[1]

        editInput(e, editBtn, productInput, saveBox)
        saveConfirm(e, editConfirm, editBtn, saveBox, box, productInput)
        saveCancel(e, editCancel, editBtn, saveBox, box, productInput)
    })
}

const closeDescription = (e) => {
    webkitClose.forEach((btn, index) => {
        if (e.target === btn) {
            productWebkit[index].style = 'display: none'
            document.body.style = 'overflow-y: auto'
        }
    })
}

const saveDescription = (e) => {
    descriptionSaveBtn.forEach((btn, index) => {
        if (e.target === btn) {

            const descriptionText = productWebkitText[index].value

            const productId = product[index].attributes.name.nodeValue

            fetch(`/api/products/${productId}`, {
                method: 'put',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ detail: descriptionText })
            }).then(res => res.json()).then(data => {
                if (data?.error) {
                    alert(data.error)
                    window.location.href = '/admin'
                } else {
                    alert(data)
                }
            })
        }
    })
}

const cancelDescription = (e, productId) => {
    descriptionCancelBtn.forEach((btn, index) => {
        const productId = product[index].attributes.name.nodeValue

        if (e.target === btn) {
            fetch(`/api/products/${productId}`, {
            }).then(res => res.json()).then(data => {
                productWebkitText[index].value = data.detail
            })
        }
    })
}

const showDescription = (e) => {
    productDescription.forEach((btn, index) => {
        if (e.target === btn) {
            productWebkit[index].style = 'display: inline-block'
            document.body.style = 'overflow-y: hidden'
        }
    })

    saveDescription(e)
    cancelDescription(e)
    closeDescription(e)
}

productContainer.addEventListener('click', (e) => {
    deleteProduct(e)
    editProduct(e)
    showDescription(e)
})

// CHAT
const clearChat = document.getElementById('clearChat')

let chatHTML = `<div class='chat-info-msg'>
                      <span>El chat se encuentra vacio en este momento<span/>
                  <div/>`;

clearChat.addEventListener('click', async () => {
    fetch('/api/chat', { method: 'delete' })
        .then(alert('Chat vaciado correctamente'))
        .then(document.getElementById("messages").innerHTML = chatHTML)
})