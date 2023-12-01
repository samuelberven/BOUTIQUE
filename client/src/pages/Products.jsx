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
    },[]);


    // const handleDelete = async (id)=> {
    //     try{
    //         await axios.delete(`https://localhost:8800/products/${id}`)
    //         // window.location.reload()
    //     }catch(err){
    //         console.log(err)
    //     }
    // };

    //             const handleChange = (e) =>{
    //                 setProduct(prev=>({...prev, [e.target.name]: e.target.value}));
    //             };
                
                const handleDelete = async(id) => {
                // e.preventDefault()
                try{
                    // await axios.delete(`https://localhost:8800/products/${id}`);
                    await axios.delete(`http://localhost:8800/products/${id}`);
                    window.location.reload()
                }catch(err){
                    console.log(err)
                }
                
                }
    





  return (
    <div>
        <h1>Boutique - Products</h1>
        <button><Link to="/add">Add new book</Link></button>
        <div className="products">
            {products.map(product=>(
                <div className="product" key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description} </p>
                    <span>({product.category}) </span>
                    <span>${product.price} </span>
                    <br></br>
                    {/* <button className="delete" onClick={()=>handleDelete(product.id)}>Delete</button> */}
                    <button className="delete" onClick={()=>handleDelete(product.id)}>Delete</button>
                    <span> </span>
                    <button className="update"><Link to={`/update/${product.id}`}>Update</Link ></button>
                    <br></br><br></br>
                </div>
            ))}
        </div>
        <br></br>
        <button><Link to="/add">Add new book</Link></button>
    </div>
  );
};

export default Products