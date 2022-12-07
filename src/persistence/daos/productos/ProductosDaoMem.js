import ContenedorMemoria from '../../contenedores/ContenedorMemoria.js'

class ProductosDaoMem extends ContenedorMemoria {
    async guardar(producto) {
        return super.guardar(producto);
    }
}

export default ProductosDaoMem;