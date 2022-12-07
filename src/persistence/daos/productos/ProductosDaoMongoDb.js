import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

import { Products } from '../../../models/Products.js';

class ProductosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super(Products);
    }
}

export default ProductosDaoMongoDb;