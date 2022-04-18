const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    }
})

module.exports = mongoose.model("Ad", AdSchema);