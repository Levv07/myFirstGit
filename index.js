const express = require("express");
const app = express();

const port = 3000;

app.get("/",(req,res)=>{
  res.send("Hello World, Workshop 2 - 3813ICT Software Frameworks");
});

app.listen(port,function(){
  console.log("Hello World, Workshop 2 - 3813ICT Software Frameworks");
});
