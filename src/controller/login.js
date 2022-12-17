import { Router } from 'express';
const route = Router()

import passport from '../middleware/passport.js'

import jwt from 'jsonwebtoken'

import { JWT } from '../../config/index.js'

route.get('/', (req, res) => {
    res.render('login')
})

route.post("/", passport.authenticate("local"), (req, res) => {
    if (typeof (req.user) === 'object') {
        const { username, email } = req.user
        const userToken = {
            username,
            email
        }

        const token = jwt.sign(userToken, JWT)
        res.json({ token })
    } else {
        res.json({ error: 'error' })
    }
});

export default route