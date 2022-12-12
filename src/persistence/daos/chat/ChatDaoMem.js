import ContenedorMemoria from '../../contenedores/ContenedorMemoria.js';

class ChatDaoMem extends ContenedorMemoria {
    async save(msg) {
        const msgText = msg.text.trim()
        if (msgText.includes('<img') || msgText === '') {
            return false
        }
        msg.text = msgText
        const data = await super.save(msg)
        return data
    }
}

export default ChatDaoMem;