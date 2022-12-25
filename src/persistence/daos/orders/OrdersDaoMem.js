import ContenedorMemoria from '../../contenedores/ContenedorMemoria.js';

class OrderDaoMem extends ContenedorMemoria {

    async save(userId) {
        if (userId) {
            const newUserId = JSON.parse(JSON.stringify(userId))
            let obj = { userId: newUserId, productos: [] }
            const data = await super.save(obj)
            return data
        }
        else {
            return undefined
        }
    }

    async update(obj) {
        const index = this.memoria.findIndex(item => item.id == obj.id)
        if (index == -1) {
            throw new Error('Error')
        } else {
            return super.update(obj, index)
        }
    }
}

export default OrderDaoMem;