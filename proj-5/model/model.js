const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
})

const model = mongoose.model("blog", Schema)

module.exports = model