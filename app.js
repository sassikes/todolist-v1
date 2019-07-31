//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.send("<h1>Welcome!</h1>");
});

app.listen("3000", function(req,res){
  console.log("Server started in the port 3000");
});
