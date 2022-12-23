import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
});

export const Products = mongoose.model('products', productsSchema);