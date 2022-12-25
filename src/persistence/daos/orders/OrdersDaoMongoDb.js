import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

import { Order } from '../../../models/Order.js';

class OrderDaoMongo extends ContenedorMongoDb {
    constructor() {
        super(Order);
    }
}

export default OrderDaoMongo;