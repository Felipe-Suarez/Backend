import { Router } from 'express'
const route = Router()

import { auth } from '../middleware/auth.js'

import { chatDao } from '../persistence/daos/index.js'

route.delete('/', auth, async (req, res) => {
    await chatDao.deleteAll()
    res.end()
})

export default route