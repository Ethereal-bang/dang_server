const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GoodsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
    },
    img: {
        type: String, // 包括各个颜色的图片
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
    price_now: {
        type: Number,
        required: true,
    },
    price_old: {
        type: Number,
    },
    color: {
        type: [String],
    },
    size: {
        type: [String],
    }
})

module.exports = mongoose.model("Goods", GoodsSchema, "goods");