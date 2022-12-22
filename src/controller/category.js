import { Router } from 'express'
const route = Router()

import { serviceHome } from '../services/home.js'
import { serviceCategory } from '../services/category.js'
import { isAdmin } from '../middleware/auth.js';

route.get('/', async (req, res) => {
    const { userData, productsInfo } = await serviceHome(req.user?._id)
    const name = userData?.username.toUpperCase()
    const veifyAdmin = await isAdmin(req)

    res.render('category', {
        userInfo: userData,
        username: name,
        productsInfo,
        userAdmin: veifyAdmin
    })
})

route.get('/:categoryName', async (req, res) => {
    const { userData, productsInfo } = await serviceHome(req.user?._id)
    const name = userData?.username.toUpperCase()
    const veifyAdmin = await isAdmin(req)

    const category = req.params.categoryName
    const products = await serviceCategory(category)

    res.render('category', {
        userInfo: userData,
        username: name,
        productsInfo: products,
        userAdmin: veifyAdmin
    })
})

export default route