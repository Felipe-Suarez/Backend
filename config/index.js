import dotenv from 'dotenv'
dotenv.config()

const PERS = process.env.PERS

const SECRET = process.env.SECRET

const URL_MONGO = process.env.URL_MONGO
const OPTIONS_MONGO = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
}

const MAIL = process.env.MAIL
const PASS_MAIL = process.env.PASS_MAIL

const TWILIO_SID = process.env.TWILIO_SID
const TWILIO_TOKEN = process.env.TWILIO_TOKEN
const TWILIO_NUMBER = process.env.TWILIO_NUMBER

export {
    PERS, SECRET, URL_MONGO, OPTIONS_MONGO, MAIL, PASS_MAIL, TWILIO_SID, TWILIO_TOKEN, TWILIO_NUMBER
}