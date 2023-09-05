const mongoose =require("mongoose");



//create users schema

const userSchema = new mongoose.Schema({
     email:{
         type:String,
         required:true,
         unique:true,
     },
      password:{
        type:String,
        required:true,
       
      },
       name:{
        type:String,
        required:true,
       
      }
});

//model defines

const users = new mongoose.model("users",userSchema);
module.exports=users;