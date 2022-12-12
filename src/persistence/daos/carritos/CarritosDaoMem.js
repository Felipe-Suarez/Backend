import ContenedorMemoria from '../../contenedores/ContenedorMemoria.js';

class CarritosDaoMem extends ContenedorMemoria {

    async save(userId) {
        const newUserId = userId = JSON.parse(JSON.stringify(userId))
        let obj = { userId: newUserId, productos: [] }
        const data = await super.save(obj)
        return data
    }
}

export default CarritosDaoMem;