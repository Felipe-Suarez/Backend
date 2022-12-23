import express from 'express'
const router = express.Router();

//router

import productsApi from '../controller/productsApi.js'
import cartApi from '../controller/cartApi.js'
import chatApi from '../controller/chatApi.js'
import register from '../controller/register.js'
import login from '../controller/login.js'
import error from '../controller/error.js'
import home from '../controller/home.js'
import category from '../controller/category.js'
import productDetail from '../controller/productDetail.js'
import logout from '../controller/logout.js'
import admin from '../controller/admin.js'
import cart from '../controller/cart.js'
import userInfo from '../controller/userInfo.js'
import token from '../controller/token.js'
import config from '../controller/config.js'
import invalidRoute from '../controller/invalidRoute.js'

//middlewares
router
    .use("/api/products", productsApi)
    .use("/api/chat", chatApi)
    .use("/api/cart", cartApi)
    .use('/register', register)
    .use('/login', login)
    .use('/', error)
    .use('/', home)
    .use('/categoria', category)
    .use('/productos', productDetail)
    .use('/logout', logout)
    .use('/admin', admin)
    .use('/cart', cart)
    .use('/userInfo', userInfo)
    .use('/token', token)
    .use('/config', config)
    .use("*", invalidRoute)

export default router