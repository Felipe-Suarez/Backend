import express from 'express'
const { Router } = express;
const route = Router();

import { auth } from '../middleware/auth.js'

import {
    serviceDeleteCart,
    serviceGetCarts,
    serviceGetCartProducts,
    serviceAddCartProducts,
    serviceUpdateCartProduct,
    serviceDeleteCartProducts
} from '../services/cartApi.js'

import { validation } from '../../utils/validation.js'

route.use(auth)

route.delete('/:id',
    async (req,
        res) => {
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

    if (validation({ productID })) {
        const addProduct = await serviceAddCartProducts(productID, cartID)
        addProduct ? res.json({ msg: 'Producto agregado a tu carrito' }) : res.json({ error: 'No se puede agregar mas cantidad de este producto al carrito' })
    } else {
        res.redirect('/')
    }
})

route.put('/:id/productos', async (req, res) => {
    const cartID = req.params.id;
    const product = req.body;

    const addProduct = await serviceUpdateCartProduct(cartID, product)

    addProduct ? res.json({ msl: 'Quantity updated' }) : res.json({ error: 'Ha ocurrido un error' })
})

route.delete('/:id/productos/:id_prod', async (req, res) => {
    const id = req.params.id;
    const productID = req.params.id_prod;

    await serviceDeleteCartProducts(id, productID)
    res.end()
})

export default route;