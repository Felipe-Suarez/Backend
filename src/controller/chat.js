import { Router } from 'express'
const route = Router()

import { isAdmin, auth } from '../middleware/auth.js'

route.get('/', async (req, res) => {
    const veifyAdmin = await isAdmin(req)
    res.render('chatPage', {
        userInfo: req.user,
        userAdmin: veifyAdmin
    })
})

route.get('/:mail', auth, async (req, res) => {
    if (req.user.email === req.params.mail) {
        const veifyAdmin = await isAdmin(req)
        res.render('chatUserMsg', {
            userInfo: req.user,
            userAdmin: veifyAdmin
        })
    } else {
        res.render('error', { msg: 'Mail de usuario no disponible' })
    }
})

export default route