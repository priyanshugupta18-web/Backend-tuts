import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
    },
    color: [
        {
            name: String,
            hexCode: String
        }
    ],
    price: {
        type: Number,
        required: true,
    },
    description:  {
        type: String,
        required: true
    },
    images: [
        {
            url: String,
            alt: String
        }
    ]
}, {timestamps: true});

export const Product = mongoose.model("Product", "productSchema");