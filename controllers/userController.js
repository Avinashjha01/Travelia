const users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "HELLO";
    
exports.signIn = async(req,res)=>{
    return res.render("login")
}
exports.signUp = async(req,res)=>{
    return res.render("register")
}

//register
exports.signup = async(req,res)=>{
    //Existing User check
       try{
        const{name,email,password} = req.body;
        console.log(req.body);
        if(!email ||!password){
            res.status(400).json({error:"plz fill all the fields"});
        }
        const user = await users.findOne({email:email});
        if(user){
            res.status(400).json({error:"User is already exists"});
            console.log("User exits already");
           }
          //Hashed Password
          const hashPassword = await bcrypt.hash(password,10);
           //user creation
           const result = await users.create({
               email:email,
               password:hashPassword,
               name:name,
             });
             //Token Generation 
            // const token = jwt.sign({email:result.email, id:result._id },SECRET_KEY)
             return res.redirect("/signin");
       }catch(error){
        res.status(400).json(error);
        console.log("catch block error");
       }

   
}
exports.signin=async(req,res)=>{
    
    try{
        const{email,password}=req.body;
     if(!email ||!password){
        res.status(400).json({error:"plz fill all the fields"});
    }
           const exitingUser = await users.findOne({email:email});
           if(!exitingUser){
            res.status(404).json({error:"User not found"});
            console.log("User does not exist");
           }
           //password matching
         const matchPassword= await bcrypt.compare(password,exitingUser.password); 
         if(!matchPassword){
            return res.status(400).json({message:"Invalid Credentials"});
         }
         //Token Generation 
         const token = jwt.sign({email:exitingUser.email, id:exitingUser._id },SECRET_KEY);
        return res.redirect("/");
        }
   catch(error){
      res.status(404).json(error);
      console.log("catch block error");
   }
   
}