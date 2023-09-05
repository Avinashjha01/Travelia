require("dotenv").config();
const express= require('express');
const jwt = require("jsonwebtoken");

const path = require('path');
require("./config/conn");
const app = express();
const routes = require("./routes");

const port = process.env.PORT;

 
app.use(express.json());

app.use(express.urlencoded({extended:false}));
app.use(express.static("./public"));

app.set('view engine', 'ejs')
app.set('views', './views')
app.use("/",routes);

app.listen(port,function(err){
    if(err){console.log('error in running the sever',err);}  
    console.log("server is running on port :",port);
});
