import { productosDao, carritosDao } from '../persistence/daos/index.js'

const serviceDeleteCart = async (id) => {
    return await carritosDao.delete(id)
}

const serviceGetCarts = async () => {
    return await carritosDao.list()
}

const serviceGetCartProducts = async (id) => {
    const carrito = await carritosDao.getById(id)
    return carrito.productos
}

const serviceAddCartProducts = async (productID, cartID) => {
    const producto = await productosDao.getById(productID)
    const carrito = await carritosDao.getById(cartID)

    const isInCart = () => carrito.productos.find(product => product.id == productID)

    let productInCart = isInCart()

    if (productInCart) {
        if (productInCart.qty > 0 && productInCart.qty < 10) {
            productInCart.qty = Number(productInCart.qty) + 1
        } else {
            return false
        }
    } else {
        carrito.productos.push(producto)
        productInCart = isInCart()
        productInCart.qty = 1
    }

    await carritosDao.update(carrito)
    return true
}

const serviceUpdateCartProduct = async (cartID, bodyProduct) => {
    const carrito = await carritosDao.getById(cartID)
    const producto = carrito.productos.find(product => product.id === Number(bodyProduct.id))

    if (bodyProduct.qty >= 1 && bodyProduct.qty <= 10) {
        producto.qty = bodyProduct.qty

        await carritosDao.update(carrito)
        return true
    }
    return false
}

const serviceDeleteCartProducts = async (id, productID) => {
    const carrito = await carritosDao.getById(id)
    const index = carrito.productos.findIndex(item => item.id == productID)

    if (index != -1) {
        carrito.productos.splice(index, 1)
        await carritosDao.update(carrito)
    }
}

export {
    serviceDeleteCart,
    serviceGetCarts,
    serviceGetCartProducts,
    serviceAddCartProducts,
    serviceUpdateCartProduct,
    serviceDeleteCartProducts
}