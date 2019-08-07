//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app=express();

var items=["Buy Food","Cook Food","Eat Food"];
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  var today = new Date();
  //var currentDate = today.getDay();
  var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  var day=today.toLocaleDateString("en-US",options);

  res.render("list",{kindOfDay:day,newListItem: items});
});


app.post("/",function(req,res){
  item=req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen("3000", function(req,res){
  console.log("Server started in the port 3000");
});
