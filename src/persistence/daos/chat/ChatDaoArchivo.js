import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

class ChatDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('chat.json')
    }

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

export default ChatDaoArchivo