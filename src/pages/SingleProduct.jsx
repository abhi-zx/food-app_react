import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
const SingleProduct = () => {
    const [singleproduct, setSingleproduct] = useState({})
    const params = useParams();
    const history = useNavigate()
    // history('/')
    // console.log(params)
    // const addto=(e,product)=>{
    //     console.log(product)
    // }
    useEffect(() => {
        fetch(`https://mighty-sands-28970.herokuapp.com/search/${params._id}`).
            then(res => res.json()).then(product => {

                setSingleproduct(product)
            })
    }, [params._id])

    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={() => { history('/') }}>Back</button>
            <div className="flex">
                <img style={{ height: 205 }} src={singleproduct.image}></img>
                <div className='ml-16'>
                    <h1 className="text-xl font-bold">{singleproduct.name}</h1>
                    <div className="text-md">{singleproduct.size}</div>
                    <div className="font-bold mt-2">${singleproduct.price}</div>
                    {/* onClick={(e)=>{addto(e,singleproduct)}} */}
                    <button  className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct