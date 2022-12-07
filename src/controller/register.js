import { Router } from 'express';
const route = Router()

import upload from '../middleware/multer.js';

import { serviceRegister } from '../services/register.js'

route.get('/', (req, res) => {
    res.render('register')
})

route.post("/", upload.single("image"), async (req, res) => {
    await serviceRegister(req, res)
});

export default route