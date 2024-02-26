import { useState } from "react"
import { productData } from './../config/data';

export const ProductCart = () => {

    const [product, setProduct] = useState(productData);
  return (
    <>
    <div className="grid grid-cols-5">
   
   {
    product.map((products)=>(
        <div key={products.id} className="bg-red-100 flex flex-col m-10">
       <img className="w-full" src={products.img} alt={product.name} />
       <p>{products.price}</p>
       <p >{products.name}</p>

        </div>
      

    ))
}
   
    </div>
    </>
  )
}
