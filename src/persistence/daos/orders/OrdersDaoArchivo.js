import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

class OrderDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('orders')
    }
}

export default OrderDaoArchivo