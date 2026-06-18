import mongoose from "mongoose";

const subTodosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

export const SubTodos = mongoose.model("SubTodos", "subTodosSchema");