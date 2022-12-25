import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products: { type: [], required: true },
    id: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true }
});

export const Order = mongoose.model('orders', orderSchema);