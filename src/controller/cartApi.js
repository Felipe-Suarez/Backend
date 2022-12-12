import express from 'express'
const { Router } = express;
const route = Router();

import { auth } from '../middleware/auth.js'

import { serviceCreateCart, serviceDeleteCart, serviceGetCarts, serviceGetCartProducts, serviceAddCartProducts, serviceDeleteCartProducts } from '../services/cartApi.js'

route.use(auth)

route.post('/', async (req, res) => {
    const product = req.body;
    res.json(await serviceCreateCart(product))
})

route.delete('/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await serviceDeleteCart(id))
})

route.get('/', async (req, res) => {
    res.json(await serviceGetCarts())
})

route.get('/:id/productos', async (req, res) => {
    const id = req.params.id
    res.json(await serviceGetCartProducts(id))
})

route.post('/:id/productos', async (req, res) => {
    const productID = req.body.id;
    const cartID = req.params.id;

    await serviceAddCartProducts(productID, cartID)
    res.end()
})

route.delete('/:id/productos/:id_prod', async (req, res) => {
    const id = req.params.id;
    const productID = req.params.id_prod;

    await serviceDeleteCartProducts(id, productID)
    res.end()
})

export default route;