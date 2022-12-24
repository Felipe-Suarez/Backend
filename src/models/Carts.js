import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    productos: { type: [], required: true },
    userId: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true }
});

export const Carts = mongoose.model('carts', cartsSchema);