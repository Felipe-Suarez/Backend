import dotenv from 'dotenv'
dotenv.config()

//ENVIRONMENT VARIABLES

const NODE_ENV = process.env.NODE_ENV

const PERS = process.env.PERS

const PORT = process.env.PORT

const SECRET = process.env.SECRET

const URL_MONGO = process.env.URL_MONGO
const OPTIONS_MONGO = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
}

const JWT = process.env.JWT

const MAIL = process.env.MAIL
const PASS_MAIL = process.env.PASS_MAIL

const TWILIO_SID = process.env.TWILIO_SID
const TWILIO_TOKEN = process.env.TWILIO_TOKEN
const TWILIO_NUMBER = process.env.TWILIO_NUMBER

export {
    NODE_ENV, PERS, PORT, SECRET, URL_MONGO, OPTIONS_MONGO, JWT, MAIL, PASS_MAIL, TWILIO_SID, TWILIO_TOKEN, TWILIO_NUMBER
}