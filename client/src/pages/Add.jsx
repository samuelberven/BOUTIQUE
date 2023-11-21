import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Navigate, useNavigate } from "react-router-dom";


const Add = () => {
  const [product,setProduct] = useState({
    name:"",
    description:"",
    category:"",
    price:null,
  });

  const navigate = useNavigate()

  const handleChange = (e) =>{
    setProduct(prev=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async e =>{
   e.preventDefault()
   try{
    await axios.post("http://localhost:8800/products", product)
    navigate("/")
   }catch(err){
    console.log(err)
   }

  }


  console.log(product)
    return (
    <div className="form">
        <h1>Add New Product</h1>
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
        <button className="formButton" onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add