import ProductosDaoArchivo from './productos/ProductosDaoArchivo.js';
import CarritosDaoArchivo from './carritos/CarritosDaoArchivo.js';
import ChatDaoArchivo from './chat/ChatDaoArchivo.js';
import OrderDaoArchivo from './orders/OrdersDaoArchivo.js'

import ProductosDaoMongoDb from './productos/ProductosDaoMongoDb.js';
import CarritosDaoMongoDb from './carritos/CarritosDaoMongoDb.js';
import ChatDaoMongo from './chat/ChatDaoMongoDb.js';
import OrderDaoMongo from './orders/OrdersDaoMongoDb.js'

import ProductosDaoMem from './productos/ProductosDaoMem.js';
import CarritosDaoMem from './carritos/CarritosDaoMem.js';
import ChatDaoMem from './chat/ChatDaoMem.js';
import OrderDaoMem from './orders/OrdersDaoMem.js'

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
class FactoryChat {
    create(pers) {
        switch (pers) {
            case 'json':
                return new ChatDaoArchivo();
            case 'mongoDb':
                return new ChatDaoMongo();
            case 'memoria':
                return new ChatDaoMem();
        }
    }
}
class FactoryOrder {
    create(pers) {
        switch (pers) {
            case 'json':
                return new OrderDaoArchivo();
            case 'mongoDb':
                return new OrderDaoMongo();
            case 'memoria':
                return new OrderDaoMem();
        }
    }
}

export { FactoryCart, FactoryProduct, FactoryChat, FactoryOrder }