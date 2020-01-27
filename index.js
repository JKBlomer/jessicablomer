const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
    
});


app.get("/about", (req,res)=>{
    res.sendFile(path.join(__dirname + "/public/about.html"));
});

app.get("/contact", (req,res)=>{
    res.sendFile(path.join(__dirname) + "/public/contact.html");
});


app.listen(3000, ()=>{
    console.log("app is listening on port 3000");
});