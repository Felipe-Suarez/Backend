import { Router } from 'express'
const route = Router()

import { serviceHome } from '../services/home.js'
import { serviceCategory } from '../services/category.js'
import { isAdmin } from '../middleware/auth.js';

route.get('/', async (req, res) => {
    const { userData, productsInfo } = await serviceHome(req.user?._id)
    const name = userData?.username.toUpperCase()
    const veifyAdmin = await isAdmin(req)

    const msg = 'mira nuestros productos'

    res.render('category', {
        userInfo: userData,
        username: name,
        productsInfo,
        userAdmin: veifyAdmin,
        msg
    })
})

route.get('/:categoryName', async (req, res) => {
    const { userData, productsInfo } = await serviceHome(req.user?._id)
    const name = userData?.username.toUpperCase()
    const veifyAdmin = await isAdmin(req)

    const category = req.params.categoryName
    const products = await serviceCategory(category)

    let msg;
    if (category === 'mates' || category === 'termos') {
        msg = `mira los ${category} que tenemos para vos`
    } else {
        msg = `mira las ${category} que tenemos para vos`
    }

    res.render('category', {
        userInfo: userData,
        username: name,
        productsInfo: products,
        userAdmin: veifyAdmin,
        msg
    })
})

export default route