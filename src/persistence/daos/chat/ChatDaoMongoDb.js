import ContenedorMongoDb from '../../contenedores/ContenedorMongoDb.js';

import { Chat } from '../../../models/Chat.js'

class ChatDaoMongo extends ContenedorMongoDb {
    constructor() {
        super(Chat);
    }

    async save(msg) {
        if (msg.text.includes('<img')) {
            return false
        }
        const data = await super.save(msg)
        return data
    }
}

export default ChatDaoMongo;