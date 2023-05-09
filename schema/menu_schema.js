const mongoose = require('mongoose')

//define schema

const menu_schema = mongoose.Schema({
    id:{
        type:Number,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true,
        unique:true
    },
    crust:{
        type:String,
        required:true,
        unique:true
    },
    veg:{
        type:Boolean,
        required:true,
        unique:true
    },
    catchy_phrase:{
        type:String,
        required:true,
        unique:true
    }
})

const menu_model = mongoose.model("items",menu_schema)


module.exports = menu_model