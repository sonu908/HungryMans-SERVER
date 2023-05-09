const mongoose = require('mongoose')

//define schema

const admin_schema = mongoose.Schema({
   
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})


const admin_model = mongoose.model("admindetails", admin_schema)


module.exports = admin_model