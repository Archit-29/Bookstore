import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
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


if (process.env.NODE_ENV === "production") {
   const dirPath = path.resolve();
   
   // Serve static files from the "dist" directory in the "Frontend" folder
   app.use(express.static(path.join(dirPath, "frontend", "dist")));
   
   // Serve the index.html file for all routes (SPA support)
   app.get("*", (req, res) => {
     res.sendFile(path.resolve(dirPath, "frontend", "dist", "index.html"));
   });
 }
 


 app.listen(PORT,()=>{
    console.log(`example listening on ${PORT}`);
 })
