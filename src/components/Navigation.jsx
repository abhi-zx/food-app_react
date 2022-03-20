import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import { Link } from 'react-router-dom';

const Navigation = () => {
    const {cart}= useContext(CartContext)
    const cartStyle = {
        background: "#F59E0D",
        display: 'flex',
        padding: "6px 12px",
        borderRadius: "50px"
    }
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between">

                <Link to="/">
                    <img style={{ height: 45 }} src="https://image.similarpng.com/very-thumbnail/2020/05/Pizza-logo-vector-PNG.png">
                    </img>
                </Link>
                <ul className="flex items-center">
                    <li> <Link to="/">Home</Link></li>
                    <li className="ml-6"><Link to="/products">Product</Link></li>
                    <li className="ml-6"><Link to="/cart">
                        <div style={cartStyle}>
                            <span>{cart.totalitems}</span>
                            <img className="ml-2" style={{ height: 20  }} src='https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png'></img>
                        </div></Link></li>
                </ul>

            </nav>
        </>
    )
}

export default Navigation