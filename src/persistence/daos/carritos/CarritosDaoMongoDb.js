import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

import { Carts } from '../../../models/Carts.js';

class CarritosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super(Carts);
    }

    async save(userId) {
        let obj = { userId, productos: [] }
        const data = await super.save(obj)
        return data
    }
}

export default CarritosDaoMongoDb;