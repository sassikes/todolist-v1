//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app=express();

var items=["Buy Food","Cook Food","Eat Food"];
var workItems=[];
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
  res.render("list",{listName:day,newListItem: items});
});


app.post("/",function(req,res){
  item=req.body.newItem;
  if(req.body.button==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  let title="Work";
  res.render("list",{listName:title,newListItem: workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});

app.listen("3000", function(req,res){
  console.log("Server started in the port 3000");
});
