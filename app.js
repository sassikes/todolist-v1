//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();

const items=["Buy Food","Cook Food","Eat Food"]; //we can push element to const array
const workItems=[];
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  let day=date.getDate();
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
