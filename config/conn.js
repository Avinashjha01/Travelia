const mongoose = require("mongoose");
const DB= process.env.DATABASE;


mongoose.connect(DB)
.then(()=>{
    console.log("Mongodb connected Successfully");
})
.catch((error)=>{
 console.log(error);
});
