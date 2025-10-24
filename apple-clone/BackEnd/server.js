const mysql = require("mysql2");
const express = require("express");

var app = express();

app.listen(3001 , () => {
    console.log("listening")
});

var db = mysql.createConnection({
    user: "apple",
    password: "apple",
    host: "127.0.0.1",
    database: "apple",
});

db.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log("connected");
    }

});