const mongoose = require('mongoose')

//define schema

const Pending_orders = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address:{
        type:String,
        required:true,
    }
})


const pending_model = mongoose.model("pending", Pending_orders)


module.exports = pending_model