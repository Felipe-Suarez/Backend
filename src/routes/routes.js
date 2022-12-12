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
router.use("/api/products", productsApi);
router.use("/api/chat", chatApi);
router.use("/api/cart", cartApi);
router.use('/', home)
router.use('/login', login)
router.use('/loginError', loginError)
router.use('/logout', logout)
router.use('/register', register)
router.use('/registerError', registerError)
router.use('/admin', admin)
router.use('/cart', cart)
router.use('/userInfo', userInfo)
router.use("*", error);

export default router