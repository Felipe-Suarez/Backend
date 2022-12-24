import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

import { Carts } from '../../../models/Carts.js';

class CarritosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super(Carts);
    }

    async save(userId, email) {
        let obj = { userId, productos: [], email, date: new Date() }
        const data = await super.save(obj)
        return data
    }
}

export default CarritosDaoMongoDb;