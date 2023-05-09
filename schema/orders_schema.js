const mongoose = require('mongoose')

//define schema

const orders_schema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    crust: {
        type: String,
        required: true,
    }
    // top:{
    //     type: String,
    //     required: true,
    //     unique: true

    // },
    // priceaddon:{
    //     type: String,
    //     required: true,
    //     unique: true

    // }
})

const order_model = mongoose.model("orders", orders_schema)


module.exports = order_model