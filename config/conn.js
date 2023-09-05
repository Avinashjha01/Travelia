const mongoose = require("mongoose");
//const DB= process.env.DATABASE;


mongoose.connect("mongodb+srv://Avinash:1234@cluster0.4oakmgt.mongodb.net/Codesoft?retryWrites=true&w=majority")
.then(()=>{
    console.log("Mongodb connected Successfully");
})
.catch((error)=>{
 console.log(error);
});