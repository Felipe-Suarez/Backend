import { Router } from 'express';
const route = Router()

route.get('/', (req, res) => {
    res.render('registerError')
})

export default route