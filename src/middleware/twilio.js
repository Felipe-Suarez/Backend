// import twilio from 'twilio'

// import { TWILIO_SID, TWILIO_TOKEN, TWILIO_NUMBER } from '../../config/index.js'

// const accountSid = TWILIO_SID
// const authToken = TWILIO_TOKEN

// const client = twilio(accountSid, authToken)

// import logger from '../../utils/logger.js'

// const sendMsg = async (phone) => {
//     try {
//         const message = await client.messages.create({
//             body: 'Su pedido ha sido recibido y se encuentra en proceso',
//             from: TWILIO_NUMBER,
//             to: phone
//         })
//         logger.info(message)
//     } catch (error) {
//         logger.error(error)
//     }
// }

// export default sendMsg