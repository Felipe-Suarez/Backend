import { productosDao, carritosDao } from '../persistence/daos/index.js';

const serviceCategory = async (category) => {
    const productsInfo = await productosDao.list()
    const getProducts = productsInfo.filter(item => item.category === category)
    return getProducts
}

export { serviceCategory }