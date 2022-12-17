import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('productos')
    }

    async save(producto) {
        return super.save(producto);
    }

    async update(obj) {
        const productList = await this.list()
        const index = productList.findIndex(item => item.id == obj.id)

        const oldObj = productList[index]
        const newObj = {
            title: obj.title || oldObj.title,
            price: obj.price || oldObj.price,
            thumbnail: obj.thumbnail || oldObj.thumbnail,
            id: parseInt(obj.id),
        }

        return super.update(newObj, index, productList)
    }
}

export default ProductosDaoArchivo;