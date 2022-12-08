import { User } from '../models/User.js'

import { carritosDao } from '../persistence/daos/index.js'

const serviceCart = async (userId) => {
    const carts = await carritosDao.list()
    const cart = carts.find(el => el.userId == userId)

    const userData = await User.findById(userId);

    return { cart, userData }
}

const serviceCartBuy = async (userId) => {
    const userData = await User.findById(userId);
    const carts = await carritosDao.list()

    const cart = carts.find(el => el.userId == userId)

    const deleteCart = await carritosDao.deleteAll()

    return { cart, userData, deleteCart }
}

export { serviceCart, serviceCartBuy }