const express = require("express");
const bodyParser = require("body-parser");
const route = require('./config/routes');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//to use route 
app.use(route);


app.listen(4000, ()=>{
    console.log("listening at http://localhost:4000 ")
});