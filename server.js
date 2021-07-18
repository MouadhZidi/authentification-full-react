console.clear(); 
const express=require("express");
const connectDB=require("./config/dbConnect");
const app=express();
require("dotenv").config();
//connect to DB
connectDB();


//routes

app.use(express.json());
app.use("/user", require("./router/user"));


//server
const PORT = process.env.PORT;
app.listen(PORT,(err)=>
err ? console.log(err):console.log(`Server is running on ${PORT}`));
