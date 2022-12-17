import { AdminDB } from "../models/Admin.js";

import jwt from 'jsonwebtoken'

// import { JWT } from '../../config/index.js'

//auth

const auth = async (req, res, next) => {
    // const authHeader = req.headers.authorization;
    // console.log('AUTH:', authHeader)

    if (req.isAuthenticated()) {
        next()
    } else {
        res.render('login')
    }

    // if (!authHeader) {
    //     return res.render('login')
    // }

    // jwt.verify(authHeader, JWT, (err, decoded) => {
    //     if (err) {
    //         return res.render('login')
    //     }
    //     next();
    // });
};

//admin

const checkAdmin = async (req) => {
    const email = await req.user?.email
    const isAdmin = await AdminDB.findOne({ email })

    return isAdmin?.email
}

const admin = (req, res, next) => {
    checkAdmin(req).then(response => {
        if (response) {
            next();
        } else {
            res.render("unAuthorized");
        }
    })

};

//render in front admin route

const isAdmin = async (req) => {
    let admin = false

    await checkAdmin(req).then(response => {
        if (response) {
            admin = true;
        }
    })
    return admin
}

export { auth, admin, isAdmin };