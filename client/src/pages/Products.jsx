import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        const fetchAllProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/products")
                console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllProducts()
    },[])

  return (
    <div>Products</div>
  )
}

export default Products