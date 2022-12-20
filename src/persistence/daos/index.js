import { SingletonCart, SingletonProduct, SingletonChat } from "./Singleton.js";

import { PERS } from "../../../config/index.js";

//DECIDE WHAT PERSISTENCE USE
let useDB;
if (PERS === undefined) useDB = 'memoria'
else useDB = PERS

const productosDao = SingletonProduct.singletonDao().create(useDB)
const carritosDao = SingletonCart.singletonDao().create(useDB)
const chatDao = SingletonChat.singletonDao().create(useDB)

export { productosDao, carritosDao, chatDao, useDB };