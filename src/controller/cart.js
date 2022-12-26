import { Router } from 'express'
const route = Router()

import { auth, isAdmin } from '../middleware/auth.js'

import sendMsg from '../middleware/twilio.js'

import { serviceCart, serviceCartBuy } from '../services/cart.js'

route.use(auth)

route.get('/', async (req, res) => {
    const { cart, userData } = await serviceCart(req.user?._id)

    const veifyAdmin = await isAdmin(req)

    res.render('cart', {
        userInfo: userData,
        cartInfo: cart.productos,
        userAdmin: veifyAdmin
    })
})

route.post('/buy', async (req, res) => {
    await serviceCartBuy(req.user?._id)

    // await sendMsg(userData.phone)

    res.json('successful purchase')
})

export default route