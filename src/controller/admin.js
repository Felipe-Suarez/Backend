import { Router } from 'express'
const route = Router()

import { auth, admin, isAdmin } from '../middleware/auth.js'

import { serviceAdmin } from '../services/admin.js'

route.get('/', auth, admin, async (req, res) => {
    const { userData, productsInfo } = await serviceAdmin(req.user?._id)

    const veifyAdmin = await isAdmin(req)

    res.render('admin', {
        userInfo: userData,
        productsInfo,
        userAdmin: veifyAdmin
    })
})

export default route