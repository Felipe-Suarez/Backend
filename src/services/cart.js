import { User } from '../models/User.js'

import { carritosDao } from '../persistence/daos/index.js'
import { ordersDao } from '../persistence/daos/index.js'

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

    const data = {
        username: userData.username,
        email: cart.email,
        id: cart.id,
        products: cart.productos,
        date: new Date()
    }

    await ordersDao.save(data)
    await carritosDao.deleteAll()

    return { data }
}

export { serviceCart, serviceCartBuy }