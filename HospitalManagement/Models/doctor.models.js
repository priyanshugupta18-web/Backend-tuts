import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qualification: [
        {
            type: String,
        }
    ],
    experience: {
        type: Number,
        default: 0
    },
    specialisation: {
        type: String,
        required: true
    },
    worksIn: [
        {
            type: mongoose.schema.Types.ObjectId,
            ref: "Hospital"
        }
    ],
    description: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE"]
    },
    salary: {
        type: Number,
        required: true
    }
}, {timestamps: true});

export const Doctor = mongoose.model("Doctor", "doctorSchema");