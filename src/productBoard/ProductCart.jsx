import { useState } from "react"
import { productData } from './../config/data';

export const ProductCart = () => {

    const [product, setProduct] = useState(productData);
  return (
    <>
    <div>
   <tbody>
   {
    product.map((products)=>(
        <tr key={products.id}>
       <td>{products.cover}</td> 
       <td>{products.name}</td>
       <td>{products.price}</td>
       <td>{products.details}</td>
        </tr>
      

    ))
}
   </tbody>
    </div>
    </>
  )
}
