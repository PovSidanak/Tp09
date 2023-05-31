const express = require('express')
const app = express()
const mongoose = require('mongoose');
const userRouter=require('./src/router/user')
require('dotenv').config()


app.use(express.json())
app.get('/',(req,res)=>{
    res.sendFile("./src/template/index.html",{root:'./'})

})

app.use('/user', userRouter)








const connectDB=async()=>{
    try{
        await mongoose.connect('${process.env.DB_CONNECTION}');
        console.log("CONNECTED");
    }catch(error){
        handleError(error);
        console.log("SOMETHING WHEN WRONG");
    }
}

connectDB()

//mongoose.connect("mongodb://localhost:27017/TP09").then(console.log("DB CONNECT SUCESSFULLY"))

app.listen(process.env.port,()=>{
    console.log(`Server run complete on http://localhost:${process.env.port}`);
})
