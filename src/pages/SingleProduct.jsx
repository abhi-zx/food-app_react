import React from 'react'

const SingleProduct = () => {
  return (
    <div className="container mx-auto mt-12">
        <button className="mb-12 font-bold">Back</button>
        <div className="flex">
            <img style={{ height: 105 } }src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Greek_pizza_%281%29.jpg/1200px-Greek_pizza_%281%29.jpg"></img>
            <div>
                <h1 className="text-xl font-bold">Pizza Name</h1>
                <div className="text-md">Small</div>
                <div className="font-bold mt-2">$500</div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct