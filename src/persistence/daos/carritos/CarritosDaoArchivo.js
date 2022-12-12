import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

class CarritosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('carritos')
    }

    async save(userId) {
        const newUserId = userId = JSON.parse(JSON.stringify(userId))
        let obj = { userId: newUserId, productos: [] }
        const data = await super.save(obj)
        return data
    }
}

export default CarritosDaoArchivo