import { Router } from "express";
const route = Router()

import { auth, isAdmin } from '../middleware/auth.js'

import { PORT, NODE_ENV, PERS } from '../../config/index.js'

const config = {
    PORT, NODE_ENV, PERS
}

route.get('/', auth, async (req, res) => {
    const veifyAdmin = await isAdmin(req)

    res.render('config', {
        userInfo: req.user,
        userAdmin: veifyAdmin,
        config
    })
})

export default route