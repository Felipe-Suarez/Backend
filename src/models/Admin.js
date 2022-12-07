import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true }
});

export const AdminDB = mongoose.model('admin', adminSchema);