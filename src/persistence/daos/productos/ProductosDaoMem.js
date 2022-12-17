import ContenedorMemoria from '../../contenedores/ContenedorMemoria.js'

class ProductosDaoMem extends ContenedorMemoria {
    async save(producto) {
        return super.save(producto);
    }

    async update(obj) {
        const index = this.memoria.findIndex(item => item.id == obj.id)
        if (index == -1) {
            throw new Error('Error')
        } else {
            const oldObj = this.memoria[index]
            const newObj = {
                title: obj.title || oldObj.title,
                price: obj.price || oldObj.price,
                thumbnail: obj.thumbnail || oldObj.thumbnail,
                id: parseInt(obj.id),
            }
            return super.update(newObj, index)
        }
    }
}

export default ProductosDaoMem;