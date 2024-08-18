import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./route/user.route.js";
import bookRoute from "./route/book.route.js";

dotenv.config();

 const app= express();
 app.use(cors());
app.use(express.json());


 const PORT=process.env.PORT || 4000;
 const URI=process.env.MongoDBURI;

try{
   mongoose.connect(URI);
   console.log('connected to mongoDB');
}catch(error){
console.log("error",error);
}

app.use('/book',bookRoute);
app.use('/user',userRoute);


 app.listen(PORT,()=>{
    console.log(`example listening on ${PORT}`);
 })