import { User } from '../models/User.js';

import { productosDao } from '../persistence/daos/index.js';

const serviceAdmin = async (userId) => {
    const userData = await User.findById(userId);

    const productsInfo = await productosDao.list()

    return { userData, productsInfo }
}

export { serviceAdmin }