import React, { useState } from 'react';
import { productData } from './../config/data';
import './product.css';

export const ProductCart = () => {
    const [products, setProducts] = useState(productData);
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className='mb-12'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 mx-8 ">
                {products.map(product => (
                    <div key={product.id} className="main-card bg-white border-2 border-black-500">
                        <img className=" image-tag" src={product.img} alt={product.name} />
                        <div className="product-details">
                            <h2 className="product-price text-gray-600">${product.price}</h2>
                            <h2 className="product-name  text-gray-600 ">{product.name}</h2>
                            
                        </div>
                        <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
