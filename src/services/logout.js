import { User } from '../models/User.js'

const serviceLogout = async (userId) => {
    const userData = await User.findById(userId)
    return userData
}

export { serviceLogout }