import { Router } from 'express'
const route = Router()

import { serviceLogout } from '../services/logout.js'

route.get("/", async (req, res) => {
    const userData = await serviceLogout(req.user?._id)

    req.session.destroy((err) => {
        if (!err) {
            res.clearCookie('token')
            return res.render('logout', { user: userData.username });
        }
        else {
            res.clearCookie('token')
            return res.redirect('/login')
        }
    });

});

export default route