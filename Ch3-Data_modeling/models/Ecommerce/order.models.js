import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: [orderItemSchema],
    

},{timestamps: true});

export const Order =  mongoose.model('Order', categorySchema)