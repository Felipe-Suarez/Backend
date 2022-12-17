import { SingletonCart, SingletonProduct, SingletonChat } from "./Singleton.js";

import { PERS } from "../../../config/index.js";

let useDB = process.argv[2]
let optionsDB;

if (PERS === 'prod') {
    optionsDB = ['mongoDb']
    if (!optionsDB.includes(useDB)) useDB = 'mongoDb'
} else {
    optionsDB = ['json', 'memoria']
    if (!optionsDB.includes(useDB)) useDB = 'memoria'
}

const productosDao = SingletonProduct.singletonDao().create(useDB)
const carritosDao = SingletonCart.singletonDao().create(useDB)
const chatDao = SingletonChat.singletonDao().create(useDB)

export { productosDao, carritosDao, chatDao, useDB };