import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 100
    },
    email: {
        type: String,
        required: true,
        max: 100
    },
    password: {
        type: String,
        required: true,
        max: 100
    },
    phone: {
        type: String,
        required: true,
        max: 100
    },
    age: {
        type: String,
        required: true,
        max: 100
    },
    image: {
        type: String,
        required: true,
        max: 100
    },
    direction: {
        type: String,
        required: true,
        max: 100
    },
});

export const User = mongoose.model('users', userSchema);