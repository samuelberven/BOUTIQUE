import express from "express";
import mysql from "mysql";
import dotenv from 'dotenv';
import cors from "cors";

import {copyData} from './microFromBob/client.js';

dotenv.config()

const app = express()

// NOTE: this might be an issue
app.use(express.json())
app.use(cors())

// Create a connection pool
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    // password: process.env.MYSQL_PASSOWRD,
    database: process.env.MYSQL_DATABASE
  })

app.get("/products", (req, res) => {
    const q = 'SELECT * FROM products'
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data) 
    })
})

app.post("/products", (req,res) => {
    const q = "INSERT INTO products (`name`,`description`,`category`,`price`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.description,
        req.body.category,
        req.body.price,
    ];

                                const data = {
                                    readyForCopying: true,
                                    json_data: {
                                    name: req.body.name,
                                    description: req.body.description,
                                    category: req.body.category,
                                    price: req.body.price,
                                    },
                                };
                                
                                copyData(data);


    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Product has been created successfully") 
    });
})


// app.delete('/products/:id', (req,res)=>{
//     const productId = req.params.id;
//     const q = "DELETE FROM products WHERE id = ?"
    
//     db.query(q, [productId], (err,data)=>{
//         if(err) return res.json(err);
//         return res.json("Product has been deleted successfully");
//     });
// });


// app.put("/products/:id", (req,res) => {
//     const productId = req.params.id;
//     const q = "UPDATE products SET `name` = ?, `description` = ?, `category` = ?, `price` = ? WHERE id = ?"

//     const values=[
//         req.body.name,
//         req.body.description,
//         req.body.category,
//         req.body.price,
//     ];

//     db.query(q, [...values,productId], (err,data) => {
//         if(err) return res.json(err);
//         return res.json("Product has been updated successfully");
//     });
// });



app.listen(8800, ()=>{
    console.log("Connected to backend!")
})
