const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    totalPrice:{ type: Number, required: true, trim: true},
    totalItems:{ type: String, required: true, trim: true},
    cardNumber:{ type: String, required: true, trim: true},
    mobileNumber:{ type: String, required: true, trim: true},
    createdAt: {
        type: Date,
        default: new Date()
    }

})

const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;