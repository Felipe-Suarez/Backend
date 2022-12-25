import { FactoryCart, FactoryProduct, FactoryChat, FactoryOrder } from "./Factory.js"

let factoryProduct;
let factoryCart;
let factoryChat;
let factoryOrder;

class SingletonProduct {
    static singletonDao() {
        if (!factoryProduct) {
            factoryProduct = new FactoryProduct()
        }
        return factoryProduct
    }
}

class SingletonCart {
    static singletonDao() {
        if (!factoryCart) {
            factoryCart = new FactoryCart()
        }
        return factoryCart
    }
}

class SingletonChat {
    static singletonDao() {
        if (!factoryChat) {
            factoryChat = new FactoryChat()
        }
        return factoryChat
    }
}
class SingletonOrder {
    static singletonDao() {
        if (!factoryOrder) {
            factoryOrder = new FactoryOrder()
        }
        return factoryOrder
    }
}

export { SingletonCart, SingletonProduct, SingletonChat, SingletonOrder }