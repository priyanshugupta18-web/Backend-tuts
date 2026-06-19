import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderItems: [
        {
            name: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    paymentMethod : {
        type: String,
        enum: ["CASH ON DELIVERY", "UPI", "DEBIT CARD"] 
    }
}, {timestamps: true});

export const Order = mongoose.model("Order", "orderSchema");