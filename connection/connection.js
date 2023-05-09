//import mongoose 

const mongo = require('mongoose')

//get connection

const db = process.env.DATABASE

//connect mongo

mongo.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("databse connected ");
}).catch((error)=>{
    console.log(error);

})