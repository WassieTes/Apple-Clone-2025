const express = require("express")
const mysql = require("mysql2")


var app = express();

app.listen(3004, () => {
    console.log("Listening ......")
});

const DB = mysql.createConnection({
    user: "apple",
    host: "localhost",
    password: "apple",
    database: "apple"
});

DB.connect((err) => {
    if(err) console.log(err);
    else console.log("connected to my Datbase .....")
});

app.get ("/signup" , (req,res) => {
    let massage = "Table created";
    let Signup1 = `CREATE TABLE IF NOT EXISTS signup(
         id INT AUTO_INCREMENT PRIMARY KEY,
         firstname VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL
    )`;
  DB.query(Signup1, (err,results,fields) => {
    if(err) console.log(err);
  });

    res.end(massage);
});