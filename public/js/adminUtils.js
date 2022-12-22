const indentifyInput = (productInput) => {
    const name = productInput.getAttribute('name')
    return name
}

const useBody = (callback, productInput) => {
    if (callback(productInput) === 'price') {
        return JSON.stringify({ price: parseInt(productInput.value) })
    } else if ((callback(productInput) === 'title')) {
        return JSON.stringify({ title: productInput.value })
    } else {
        return JSON.stringify({ category: productInput.value })
    }
}

const resetValue = (callback, productInput, data) => {
    if (callback(productInput) === 'price') {
        return productInput.value = data.price
    } else if ((callback(productInput) === 'title')) {
        return productInput.value = data.title
    } else {
        return productInput.value = data.category
    }
}

export { indentifyInput, useBody, resetValue }