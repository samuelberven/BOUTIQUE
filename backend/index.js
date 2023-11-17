import express from "express"
import mysql from "mysql"
import dotenv from 'dotenv'


dotenv.config()


const app = express()

// NOTE: this might be an issue
app.use(express.json())

// Create a connection pool
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSOWRD,
    database: process.env.MYSQL_DATABASE
  })


app.get("/products", (req, res) => {
    const q = 'SELECT * FROM products'
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data) 
    })
})

        // app.get("/", (req, res)=>{
        //     res.json("hello this is the backend")
        // })



app.post("/products", (req,res) => {
    const q = "INSERT INTO products (`name`,`description`,`category`,`price`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.description,
        req.body.category,
        req.body.price,
    ];

    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Product has been created successfully") 
    })
})





app.listen(8800, ()=>{
    console.log("Connected to backend!")
})
