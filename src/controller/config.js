import { Router } from "express";
const route = Router()

import { auth, isAdmin } from '../middleware/auth.js'

import { PORT, NODE_ENV, PERS, MAX_AGE } from '../../config/index.js'

const ageSeconds = MAX_AGE / 1000
const ageMinutes = ageSeconds / 60
const ageHours = ageMinutes / 60
const ageDays = ageMinutes / 24

const config = {
    PORT, NODE_ENV, PERS, ageMinutes
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