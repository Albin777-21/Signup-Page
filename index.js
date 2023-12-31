const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/User_Management")

const express=require("express")
const app=express();

app.use(express.static('public'));

 //for user routes

const userRouter=require('./routes/userRouter')
app.use('/',userRouter)

//for admin routes

const adminRouter=require('./routes/adminRouter')
app.use('/admin',adminRouter)

app.listen(4000,()=>{
  console.log("Server running...");
})
 