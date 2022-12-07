import { FactoryCart, FactoryProduct } from "./Factory.js"

let factoryProduct;
let factoryCart;

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

export { SingletonCart, SingletonProduct }