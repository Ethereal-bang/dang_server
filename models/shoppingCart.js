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
    goodsList: {    // {商品id, 对应数目}
        type: [{
            goods: Schema.Types.ObjectId,
            count: Number,
        }],
        ref: "Goods", 
    },
}) 

module.exports = mongoose.model("ShoppingCart", ShoppingCartSchema, "shoppingCart");