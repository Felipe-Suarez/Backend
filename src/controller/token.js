import { Router } from "express";
const route = Router()

import jwt from 'jsonwebtoken'
import { JWT } from '../../config/index.js'

route.get('/', (req, res) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.json('no hay token')
    }

    jwt.verify(authHeader, JWT, async (err, decoded) => {
        if (err) {
            return res.json('token no valido')
        }
        req.user && res.cookie('token', 'true', { httpOnly: true })
        return res.json('token valido')
    });
})

export default route