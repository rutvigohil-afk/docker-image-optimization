const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req,res)=>{

res.send("Docker Image Optimization Project");

});

app.listen(PORT,()=>{

console.log(`Server running on ${PORT}`);

});