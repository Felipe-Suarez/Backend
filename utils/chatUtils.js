import { Chat } from '../src/models/Chat.js'

import '../config/connect.js'

const list = async () => {
    try {

        const allMessage = Chat.find()
        return allMessage

    } catch (err) {
        throw new Error('No se pudo leer la Base de Datos', err)
    }
}

const save = async (message) => {
    try {
        const newMessage = new Chat(message)

        if (newMessage.text.includes('<img')) {
            return false
        }

        newMessage.save()
        return newMessage
    } catch (err) {
        throw new Error('No se pudo leer la Base de Datos', err)
    }
}

export const chatUtils = { list, save }
