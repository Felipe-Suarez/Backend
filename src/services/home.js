import { productosDao, carritosDao } from '../persistence/daos/index.js';

import { User } from '../models/User.js';

const serviceHome = async (userId) => {
    const carts = await carritosDao.list()
    const cart = carts.find(el => el.userId == userId)

    if (!cart) {
        await carritosDao.save(userId)
    }

    const productsInfo = await productosDao.list()

    const userData = await User.findById(userId);

    return { userData, productsInfo }
}

export { serviceHome }