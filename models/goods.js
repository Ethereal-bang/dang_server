const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GoodsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    img: {
        type: [String], // 包括各个颜色的图片
        required: true,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
    },
    store: {    // 出版社/店铺
        type: Schema.ObjectId,
        ref: "Store",
        required: true,
    },
    comments: {
        type: Number,
    },
    price: {
        type: Number,
        required: true,
    },
    color: {
        type: [String],
    },
    size: {
        type: [String],
    }
})

module.exports = mongoose.model("Goods", GoodsSchema);