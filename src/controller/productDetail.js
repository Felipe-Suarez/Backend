import { Router } from 'express'
const route = Router()

import { serviceGetProduct } from '../services/productsApi.js'

import { isAdmin } from '../middleware/auth.js';

route.get('/:id', async (req, res) => {
    const productId = req.params.id
    const product = await serviceGetProduct(productId)

    console.log(product.detail)

    if (product.error) {
        res.render('error', { msg: product.error })
    } else {

        const veifyAdmin = await isAdmin(req)
        res.render('productDetail', {
            userInfo: req.user,
            userAdmin: veifyAdmin,
            productInfo: product
        })
    }
})

export default route