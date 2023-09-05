const express = require('express');
const {signup,signin,signIn,signUp} = require('../controllers/userController');

const homeController = require("../controllers/homeController");
const routes =  express.Router();

//routers
routes.get("/signin",signIn);
routes.get("/signup",signUp);
routes.post("/register",signup);
routes.post("/login",signin);
routes.get("/",homeController.home);
module.exports = routes;