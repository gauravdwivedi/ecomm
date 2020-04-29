const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
   
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productScheme);
module.exports = Product;