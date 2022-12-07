import { Router } from "express"
const route = Router()

import { auth, isAdmin } from '../middleware/auth.js'

import { serviceUser } from '../services/userInfo.js'

route.get('/', auth, async (req, res) => {
    const { userData, myCart } = await serviceUser(req.user?._id)

    const veifyAdmin = await isAdmin(req)

    res.render('userInfo', {
        userInfo: userData,
        cartId: myCart.id,
        userAdmin: veifyAdmin
    })
})

route.get('/data', auth, async (req, res) => {
    const { myCart } = await serviceUser(req.user?._id)

    res.send(myCart)
})

export default route