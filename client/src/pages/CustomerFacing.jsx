import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const CustomerFacing = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/customerFacing")
                
                setProducts(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllProducts()
    },[]);
    
  return (
    <div>
        <h1>Boutique - Products</h1>
        <h3>(customer-facing preview)</h3>
        <div className="customer-facing-products">
            {products.map(product=>(
                <div className="product" key={product.id}>
                    <h2>{product.name}</h2>
                    <span>{product.description} </span><br></br>
                    <span>${product.price} </span><br></br>
                    <br></br>
                </div>
            ))}
        </div>
        <br></br>
        <button><Link to="/">Back to internal-use database</Link></button>
    </div>
  );
};

export default CustomerFacing