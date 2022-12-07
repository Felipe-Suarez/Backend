import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('productos.json')
    }

    async guardar(producto) {
        return super.guardar(producto);
    }
}

export default ProductosDaoArchivo;