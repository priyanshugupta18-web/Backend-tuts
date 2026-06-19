import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE"]
    },
    bloodGroup: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true,
    },
    admittedIn: {
        name: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    }
}, {timestamps: true})