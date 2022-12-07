import { productosDao } from '../persistence/daos/index.js'

const serviceGetProducts = async () => {
    const products = await productosDao.list()
    return products
}
const serviceGetProduct = async (productId) => {
    return await productosDao.getById(productId)
}
const serviceProductSave = async (bodyProduct) => {
    await productosDao.save(bodyProduct)
}
const serviceProductUpdate = async (bodyProduct, productId) => {
    bodyProduct.id = productId

    return await productosDao.update(bodyProduct)
}
const serviceDeleteProduct = async (productId) => {
    await productosDao.delete(productId)
}

export { serviceGetProducts, serviceGetProduct, serviceProductSave, serviceProductUpdate, serviceDeleteProduct }