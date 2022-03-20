// import { Link } from '@material-ui/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
const Product = (props) => {
    // console.log(props);
     const {cart,setCart}=useContext(CartContext)
    // console.log(cart)

    const add =(e,product)=>{
      e.preventDefault()
      // cart={
      //   items:{
            // id_1:1,
            // id_2:1
      //   },
      //   totalitems:1
      // }
      let _cart = {...cart}
      if(!_cart.items)
      _cart.items={}
      if(_cart.items[product._id]){
        _cart.items[product._id]++
      }
      else{
        _cart.items[product._id]=1
      }

      if(!_cart.totalitems){
        _cart.totalitems=0
        
      }
      _cart.totalitems+=1;
      setCart(_cart)
    }
    const {product}= props
  return (
   <Link to={`/product/${product._id}`}>
    <div>
        <img src={product.image}></img>
        <div className='text-center'>
        <h2 className="text-lg font-bold py-2">{product.name}</h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.size}</span>
        </div>
        
        <div className='flex justify-between items-center mt-4'>
            <span>${product.price}</span>
            <button onClick={(e)=>{add(e,product)}} className="bg-yellow-500 py-1 px-4 rounded-full font-bold">Add</button>
        </div>
    </div></Link>
  )
}

export default Product
