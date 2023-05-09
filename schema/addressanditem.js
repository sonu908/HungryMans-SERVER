const mongoose = require('mongoose')

//define schema

const add_item_schema = mongoose.Schema({
   
    pending: {
        type: Object,
        required: true,
    },
    orders: {
        type: Object,
        required: true,
    }
})


const add_item_model = mongoose.model("addressanditems", add_item_schema)


module.exports = add_item_model