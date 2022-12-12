import { FactoryCart, FactoryProduct, FactoryChat } from "./Factory.js"

let factoryProduct;
let factoryCart;
let factoryChat;

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

export { SingletonCart, SingletonProduct, SingletonChat }