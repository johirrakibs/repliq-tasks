import { useState } from 'react';
import { productData } from './../config/data';
import './product.css';
import ProductModal from '../component/Modal';

export const ProductCart = () => {
  const [products, setProducts] = useState(productData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const showProductModal = product => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='mb-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 mx-8 '>
        {products.map(product => (
          <div
            key={product.id}
            onClick={() => showProductModal(product)}
            className='main-card flex flex-col items-center justify-between h-74 bg-white border-2 border-black-500 cursor-pointer'>
            <img className='image-tag' src={product.img} alt={product.name} />
            <div className='product-details'>
              <h2 className='product-price text-gray-600'>${product.price}</h2>
              <h2 className='product-name text-gray-600'>{product.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};
