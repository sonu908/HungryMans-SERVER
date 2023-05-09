const mongoose = require('mongoose')

const top_schema = mongoose.Schema({
    top:{
        type: String,
        required: true,
        unique: true

    },
    priceaddon:{
        type: String,
        required: true,
        unique: true

    }
})

const model_top = mongoose.model("addons", top_schema)

module.exports = model_top