const express = require("express")
const mysql = require("mysql2")
const cors = require("cors");


var app = express();


app.use(cors()); 
app.use(express.json());  

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
         lasttname VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL
    )`;
  DB.query(Signup1, (err,results,fields) => {
    if(err) console.log(err);
  });

    res.end(massage);
});

app.post("/insert", (req, res) => {
  console.log(req.body);

  const { firstname, lastname, email, password } = req.body;

  let add = `INSERT INTO signup(firstname, lastname, email, password)
             VALUES (?, ?, ?, ?)`; // safer: prevents SQL injection

  DB.query(add, [firstname, lastname, email, password], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.json({ message: "Signup successful" });
  });
});