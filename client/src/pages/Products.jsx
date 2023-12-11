import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import {Link} from 'react-router-dom';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/products")                
                setProducts(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllProducts()
    },[]);

    const handleDelete = async(id) => {
    try{
        await axios.delete(`http://localhost:8800/products/${id}`);
        window.location.reload()
    }catch(err){
        console.log(err)
    }
}
    
  return (
    <div>
        <h1>
            <button className="top-link-button"><Link to="/customerFacing">Customer-facing database preview</Link></button>
        </h1>
        <div className="header">
            <h1>Boutique - Products</h1>
            <h3>(Internal company use)</h3>
                    {/* HERE */}
            <button><Link to="/add">Add new product</Link></button>
            <div><br></br></div>
        </div>

        <div className="products">
            {products.map(product=>(
                <div className="product" key={product.id}>
                    <h2>{product.name}</h2>
                    <span> -Product picture eventually goes here- </span><br></br>
                    <span>({product.category}) </span><br></br>
                    <span>{product.description} </span><br></br>
                    <span>${product.price} </span>
                    <br></br>
                    <button className="delete" onClick={()=>handleDelete(product.id)}><MdDelete /></button>
                    <span>    </span>
                    <button className="update"><Link to={`/update/${product.id}`}><MdEdit /></Link ></button>                    
                    <br></br><br></br>
                </div>
            ))}
        </div>
        <br></br>
        <button><Link to="/add">Add new product</Link></button>
    </div>
  );
};

export default Products