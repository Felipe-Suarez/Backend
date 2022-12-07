import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    productos: { type: [], required: true },
    userId: { type: String, required: false }
});

export const Carts = mongoose.model('carts', cartsSchema);