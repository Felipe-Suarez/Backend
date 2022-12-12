import ContenedorMemoria from '../../contenedores/ContenedorMemoria.js';

class ChatDaoMem extends ContenedorMemoria {

    async save(carrito = { productos: [] }) {
        return super.save(carrito)
    }
}

export default ChatDaoMem;