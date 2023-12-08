import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

// NOTE: This might be wrong-- look into it
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
    // e.preventDefault()
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

        <h1>Boutique - Products</h1>
        <h3>(Internal company use)</h3>
                {/* HERE */}
        <button><Link to="/add">Add new product</Link></button>
        <div className="products">
            {products.map(product=>(
                <div className="product" key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description} </p>
                    <span>({product.category}) </span>
                    <span>${product.price} </span>
                    <br></br>
                    <button className="delete" onClick={()=>handleDelete(product.id)}>Delete</button>
                    <span> </span>
                    <button className="update"><Link to={`/update/${product.id}`}>Update</Link ></button>
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