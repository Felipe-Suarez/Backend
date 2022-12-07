import ProductosDaoArchivo from './productos/ProductosDaoArchivo.js';
import CarritosDaoArchivo from './carritos/CarritosDaoArchivo.js';

import ProductosDaoMongoDb from './productos/ProductosDaoMongoDb.js';
import CarritosDaoMongoDb from './carritos/CarritosDaoMongoDb.js';

import ProductosDaoMem from './productos/ProductosDaoMem.js';
import CarritosDaoMem from './carritos/CarritosDaoMem.js';

class FactoryProduct {

    create(pers) {
        switch (pers) {
            case 'json':
                return new ProductosDaoArchivo();
            case 'mongoDb':
                return new ProductosDaoMongoDb();
            case 'memoria':
                return new ProductosDaoMem();
        }
    }
}

class FactoryCart {

    create(pers) {
        switch (pers) {
            case 'json':
                return new CarritosDaoArchivo();
            case 'mongoDb':
                return new CarritosDaoMongoDb();
            case 'memoria':
                return new CarritosDaoMem();
        }
    }
}

export { FactoryCart, FactoryProduct }