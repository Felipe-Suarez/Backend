import { AdminDB } from "../models/Admin.js";

//auth

const auth = (req, res, next) => {

    if (req.isAuthenticated()) {
        next();
    } else {
        res.render("login");
    }

};

//admin

const checkAdmin = async (req) => {
    const email = await req.user.email
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