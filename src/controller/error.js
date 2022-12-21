import { Router } from 'express';
const route = Router()

route.get('/loginError', (req, res) => {
    res.render('error', { msg: 'Credenciales no validas' })
})

route.get('/registerError', (req, res) => {
    res.render('error', { msg: 'Usuario ya registrado' })
})

export default route