import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

// This might be wrong
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
    },[])

  return (
    <div>
        <h1>Boutique - Products</h1>
        <div className="products">
            {products.map(product=>(
                <div className="product" key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                </div>

            ))}

        </div>
        <button><Link to="/add">Add new book</Link></button>
    
    </div>
  );
};

export default Products