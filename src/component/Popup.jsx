// Popup.js
import React from 'react';

const Popup = ({ product, setShowPopup }) => {
    const handleAddToCart = () => {
        // Implement add to cart functionality here
        console.log('Product added to cart:', product);
        setShowPopup(false);
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <img className="w-full h-auto object-cover object-center" src={product.img} alt={product.name} />
                <div className="p-4">
                    <p className="text-gray-600 text-sm">${product.price}</p>
                    <p className="text-gray-900 font-semibold text-sm text-wrap">{product.name}</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;

