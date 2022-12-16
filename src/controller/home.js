import { Router } from 'express';
const route = Router();

import { auth, isAdmin } from '../middleware/auth.js';

import { serviceHome } from '../services/home.js'

route.get("/", auth, async (req, res) => {
    const { userData, productsInfo } = await serviceHome(req.user?._id)
    const veifyAdmin = await isAdmin(req)
    res.render("home", {
        userInfo: userData,
        productsInfo,
        userAdmin: veifyAdmin
    });
});

export default route;