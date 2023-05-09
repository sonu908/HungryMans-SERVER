require('dotenv').config()

//import

const express = require('express')
const cors = require('cors')
const router = require('./router/routes')

require('./connection/connection')

const server = express()

server.use(express.json())
server.use(cors())
server.use(router)

const port = 3000

//api 
server.get('/',(req,res)=>{
    res.status(200).json("server is running")
    console.log('server running');

})

server.listen(port,()=>{
    console.log(`server is listening : ${port}`);
})
