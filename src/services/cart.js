import { User } from '../models/User.js'

import { carritosDao } from '../persistence/daos/index.js'
import { ordersDao } from '../persistence/daos/index.js'

import { newPurchase } from '../../utils/nodemailer.js'

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

    await newPurchase(data)

    await ordersDao.save(data)
    await carritosDao.delete(cart.id)

    await carritosDao.save(userData._id, cart.email)

    return { data }
}

export { serviceCart, serviceCartBuy }