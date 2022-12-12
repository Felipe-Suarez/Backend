import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

export const Chat = mongoose.model("chat", ChatSchema)