import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('productos')
    }

    async save(producto) {
        return super.save(producto);
    }
}

export default ProductosDaoArchivo;