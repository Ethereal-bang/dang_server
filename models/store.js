const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["Press", "Shop"],    // 出版商/店铺
    },
    service: {
        type: [{
            icon: String,
            desc: String,
        }],
        required: true,
    },
    img: {  // 出版商图片
        type: String,
    }
})

module.exports = mongoose.model("Store", StoreSchema);