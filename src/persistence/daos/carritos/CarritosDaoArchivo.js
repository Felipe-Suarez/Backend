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
    async update(obj) {
        const productList = await this.list()
        const index = productList.findIndex(item => item.id == obj.id)

        return super.update(obj, index, productList)
    }
}

export default CarritosDaoArchivo