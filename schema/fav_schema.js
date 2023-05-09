const mongoose = require('mongoose')

//define schema

const fav_schema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    catchy_phrase:{
        type:String,
        required:true,
        unique:true
    }
})


const fav_model = mongoose.model("favorites", fav_schema)


module.exports = fav_model