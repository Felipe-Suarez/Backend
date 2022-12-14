import { Router } from 'express';
const route = Router()

import upload from '../middleware/multer.js';

import { serviceRegister } from '../services/register.js'

import { validation } from '../../utils/validation.js';

route.get('/', (req, res) => {
    res.render('register')
})

route.post("/", upload.single("image"), async (req, res) => {
    if (validation(req.body, res, '/register')) {
        await serviceRegister(req, res)
    } else {
        res.redirect('/register')
    }
});

export default route