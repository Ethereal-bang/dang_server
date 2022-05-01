const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// create schema
const UserSchema = new Schema({
    tel: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    shoppingCart: {
        type: Schema.Types.ObjectId,
        ref: "ShoppingCart",
        required: true,
    },
    address: {
        type: String,
    }
})
// create model
module.exports = mongoose.model("User", UserSchema);