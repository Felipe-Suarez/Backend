import express from 'express'
const router = express.Router();

//router

import productsApi from '../controller/productsApi.js'
import chatApi from '../controller/chatApi.js'
import cartApi from '../controller/cartApi.js'
import error from '../controller/error.js'
import home from '../controller/home.js'
import login from '../controller/login.js'
import loginError from '../controller/loginError.js'
import logout from '../controller/logout.js'
import register from '../controller/register.js'
import registerError from '../controller/registerError.js'
import admin from '../controller/admin.js'
import cart from '../controller/cart.js'
import userInfo from '../controller/userInfo.js'

//middlewares
router
    .use("/api/products", productsApi)
    .use("/api/chat", chatApi)
    .use("/api/cart", cartApi)
    .use('/', home)
    .use('/login', login)
    .use('/loginError', loginError)
    .use('/logout', logout)
    .use('/register', register)
    .use('/registerError', registerError)
    .use('/admin', admin)
    .use('/cart', cart)
    .use('/userInfo', userInfo)
    .use("*", error);


export default router