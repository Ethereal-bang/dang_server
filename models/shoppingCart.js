const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShoppingCartSchema = new Schema({
    count: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },
    goodsList: {
        type: [Schema.Types.ObjectId],
        ref: "Goods",
    },
}) 

module.exports = mongoose.model("ShoppingCart", ShoppingCartSchema, "shoppingCart");