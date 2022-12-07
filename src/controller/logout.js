import { Router } from 'express'
const route = Router()

import { serviceLogout } from '../services/logout.js'

route.get("/", async (req, res) => {
    const userData = await serviceLogout(req.user?._id)

    req.session.destroy((err) => {
        if (!err) {
            res.render('logout', { user: userData.username });
        }
        else {
            res.redirect('/login')
        }
    });

});

export default route