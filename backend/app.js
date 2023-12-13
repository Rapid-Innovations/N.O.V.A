const express=require('express')
//const product=require('')
const app=express()

app.use(express.json())

//Route Imports

const product =require("./routes/productRoute")

app.use("/api/v1",product)

module.exports=app