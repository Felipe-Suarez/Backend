import { Router } from "express"
const route = Router()

import { auth, isAdmin } from '../middleware/auth.js'

import { serviceUser } from '../services/userInfo.js'

import multerEdit from '../middleware/multerEdit.js'

route.get('/', auth, async (req, res) => {
    const { userData, myCart } = await serviceUser(req.user?._id)

    const veifyAdmin = await isAdmin(req)

    // console.log(req.user.image)

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

route.post('/editImg', multerEdit.single('newImage'), (req, res) => {
    res.redirect('/userInfo')
})

export default route