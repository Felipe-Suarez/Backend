import { SingletonCart, SingletonProduct } from "./Singleton.js";

const optionsDB = ['json', 'mongoDb', 'memoria']

let useDB = process.argv[2]

if (!optionsDB.includes(useDB)) useDB = 'mongoDb'

const productosDao = SingletonProduct.singletonDao().create(useDB)
const carritosDao = SingletonCart.singletonDao().create(useDB)

export { productosDao, carritosDao, useDB };