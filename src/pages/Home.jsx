import React from 'react'
import {Link} from 'react-router-dom';
import Products from '../components/Products'
const Home = () => {
  
  return (
      <>
    <div className="hero py-16">
        <div className="container mx-auto flex items-center justify-between">
            <div className="w-1/2">
                <h6 className='text-lg'>Are you hungry?</h6>
                <h1 className="text-3xl md:text-6xl font-bold">Dont wait !</h1>
                <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500
                hover:bg-yellow-600">Order Now</button>
            </div>
         <div className="w-1/2">
             <img style={{ height: 405 }} src="https://media.istockphoto.com/photos/pizza-margarita-with-cheese-top-view-isolated-on-white-background-picture-id1168754685?k=20&m=1168754685&s=612x612&w=0&h=XauWtcSx53Ey0yswLWggNGQi7gmTjba0TXloXO4NAIs="></img>
         </div>
        </div>

    </div>
    <div className="pb-24">
    <Products></Products>
    </div>
    </>
  )
}

export default Home