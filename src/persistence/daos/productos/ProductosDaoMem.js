import ContenedorMemoria from '../../contenedores/ContenedorMemoria.js'

class ProductosDaoMem extends ContenedorMemoria {
    async save(producto) {
        return super.save(producto);
    }
}

export default ProductosDaoMem;