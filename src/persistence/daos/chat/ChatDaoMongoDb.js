import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

import { Chat } from '../../../models/Chat.js'

class ChatDaoMongo extends ContenedorMongoDb {
    constructor() {
        super(Chat);
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

export default ChatDaoMongo;