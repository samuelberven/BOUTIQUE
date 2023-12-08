import express from "express";
import mysql from "mysql";
import dotenv from 'dotenv';
import cors from "cors";
import {copyData} from './microservices/queryFilter/client.js';
// import {copyData} from './microFromBob/client.js';

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



// **************************************
// products database routes
// **************************************
  app.get("/products", (req, res) => {
    const q = 'SELECT * FROM products'
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data) 
    })
})

// NOTE: Could be wrong
app.get("/products/:id", (req, res) => {
    const id = req.params.id
    const q = `SELECT * FROM products WHERE id = ?`
    // const productId = req.params.id;

    db.query(q, id, (err,data)=>{
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

    // FOR DEMO VIDEO: MICROSERVICE IMPLEMENTATION HERE
    const data = {
        readyForCopying: true,
        json_data: {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        },
    };

    copyData(data)
    // const microResponse = copyData(data);



    
    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Product has been created successfully") 
    });
});

app.delete("/products/:id", (req,res) => {
    const productId = req.params.id;
    const q = "DELETE FROM products WHERE id = ?"    
    db.query(q,[productId], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Product has been deleted successfully.");
    });
});

// Re: req.body vs req.params: https://stackoverflow.com/questions/24976172/node-js-req-params-vs-req-body
app.put("/products/:id", (req,res) => {
    const productId = req.params.id;
    // const productId = req.body.id;

    const q = "UPDATE products SET `name` = ?, `description` = ?, `category` = ?, `price` = ? WHERE id = ?"

    const values=[
        req.body.name,
        req.body.description,
        req.body.category,
        req.body.price,
    ];

    db.query(q, [...values,productId], (err,data) => {
        if(err) return res.json(err);
        return res.json("Product has been updated successfully");
    });
});




// **************************************
// customerFacing database routes
// **************************************

app.get("/customerFacing", (req, res) => {
    const q = 'SELECT * FROM customerFacing'
    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data) 
    })
})

// NOTE: Could be wrong
app.get("/customerFacing/:id", (req, res) => {
    const id = req.params.id
    const q = `SELECT * FROM customerFacing WHERE id = ?`
    // const productId = req.params.id;

    db.query(q, id, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data) 
    })
})














app.listen(8800, ()=>{
    console.log("Connected to backend!")
})
