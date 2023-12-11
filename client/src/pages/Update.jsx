import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import { Navigate, useNavigate } from "react-router-dom";


const Update = () => {
  const [product,setProduct] = useState({
    name:"",
    description:"",
    category:"",
    price:null,
  });

  const navigate = useNavigate()
  const location = useLocation()

  // Gets the (isolated) product ID 
  const productID = location.pathname.split("/")[2]
  

  const handleChange = (e) =>{
    setProduct(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async e =>{
   e.preventDefault()
   try{
    await axios.put("http://localhost:8800/products/"+ productID, product);
    navigate("/")
   }catch(err){
    console.log(err)
   }

  }


//   [
//     {
//         "id": 61,
//         "name": "Pastel Sweater",
//         "description": "A sweater featuring beautiful pastel colors",
//         "category": "Outerwear",
//         "price": 29.99
//     }
// ]

  console.log(product)
    return (
    <div className="form">
        <h1>Update Product</h1>
        <input 
            type="text" 
            placeholder="name" 
            onChange={handleChange} 
            name="name"
        />
        <input 
            type="text" 
            placeholder="description"
            onChange={handleChange} 
            name="description"            
        />
        <input 
            type="text" 
            placeholder="category" 
            onChange={handleChange} 
            name="category"
        />
        <input 
            type="number" 
            placeholder="price" 
            onChange={handleChange} 
            name="price"
        />
        <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update