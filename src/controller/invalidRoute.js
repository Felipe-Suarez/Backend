import express from 'express'
const { Router } = express
const route = Router();

route.all("*", (req, res) => {
    res.json({ error: -2, descripcion: `ruta '${req.originalUrl}' motodo '${req.method}' no implementada` })
})

export default route;