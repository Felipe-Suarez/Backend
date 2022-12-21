import { User } from '../models/User.js'

import { carritosDao } from '../persistence/daos/index.js'

const serviceUser = async (userId) => {
    if (userId) {
        const userData = await User.findById(userId);

        const allCart = await carritosDao.list()
        const myCart = await allCart.find(item => item.userId === userData.id)

        return { userData, myCart }
    } else {
        return false
    }
}

export { serviceUser }