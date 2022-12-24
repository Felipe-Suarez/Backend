import { productosDao, carritosDao } from '../persistence/daos/index.js';

import { User } from '../models/User.js';

const serviceHome = async (userId, email) => {
    const carts = await carritosDao.list()
    const cart = carts.find(el => el.userId == userId)

    if (!cart && userId && email) {
        await carritosDao.save(userId, email)
    }

    const productsInfo = await productosDao.list()
    const userData = await User.findById(userId);

    return { userData, productsInfo }
}

export { serviceHome }