import express from "express";
import mongoose from "mongoose";
import router from "./route/routes.js";
import cors from "cors"


const app=express()

app.use(express.json())

app.use(cors());

mongoose.connect("mongodb+srv://ajij:7pt2AejwcFh1o56K@cluster0.dwd5pcx.mongodb.net/drop&drag",{useNewUrlParser:true})
.then(()=>console.log("Mongodb is Connected")) 
.catch(err=>console.log(err))  


app.use("/",router)

app.listen(process.env.PORT || 8000, function(){
    console.log(`Server Started on : ${process.env.PORT || 8000}`)
})