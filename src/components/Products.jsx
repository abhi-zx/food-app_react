import React from 'react'
import Product from "./Product"
import {useEffect,useState} from "react"
const Products = () => {
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://mighty-sands-28970.herokuapp.com/search')
        .then(res=>res.json())
        .then(products=>{
            // console.log(products)
            setProduct(products)
            // console.log(products)
        })
    },[])

  return (
    <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8">Products</h1>
        <div className="grid grid-cols-5 my-8 gap-24">
        {
            products.map(product =><Product key={product._id} product={product}/>)
        }
        </div>
    </div>
  )
}

export default Products