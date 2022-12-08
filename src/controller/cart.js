import { Router } from 'express'
const route = Router()

import { auth, isAdmin } from '../middleware/auth.js'

import sendMsg from '../middleware/twilio.js'

import { newPurchase } from '../../utils/nodemailer.js'

import { serviceCart, serviceCartBuy } from '../services/cart.js'

route.get('/', auth, async (req, res) => {
    const { cart, userData } = await serviceCart(req.user?._id)

    const veifyAdmin = await isAdmin(req)

    res.render('cart', {
        userInfo: userData,
        cartInfo: cart.productos,
        userAdmin: veifyAdmin
    })
})

route.get('/buy', auth, async (req, res) => {
    const { cart, userData, deleteCart } = await serviceCartBuy(req.user?._id)

    const data = {
        username: userData.username,
        mail: userData.email,
        products: cart.productos,
    }

    await newPurchase(data)
    await sendMsg(userData.phone)

    await deleteCart
})

export default route