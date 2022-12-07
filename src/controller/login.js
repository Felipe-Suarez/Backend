import { Router } from 'express';
const route = Router()

import passport from '../middleware/passport.js'

route.get('/', (req, res) => {
    res.render('login')
})

route.post("/", passport.authenticate("local", { failureRedirect: "loginError" }), (req, res) => {
    res.redirect('/')
});

export default route