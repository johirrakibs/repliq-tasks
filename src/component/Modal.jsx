import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice";

export default function Modal({ product, onClose }) {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleAddProduct = (newProduct) => {
    dispatch(addProduct(newProduct));
  };

  // Close the modal when clicking outside of the content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div className="justify-center rounded-lg items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div ref={modalRef} className="relative w-72 my-6 mx-auto max-w-3xl rounded-lg">
          <div className="justify-center items-center flex flex-col w-full bg-white outline-none focus:outline-none">
            <img
              src={product?.img}
              className="w-48 justify-center items-center"
            />
            <div className="flex justify-center items-center">
              <h3 className="text-2xl font-semibold">{product?.name}</h3>
            </div>

            <div className="relative mx-2">
              <p className="my-4 text-slate-500 text-base ">
                {product?.details}
              </p>
            </div>

            <div className="flex items-center justify-between py-2 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-sky-500 text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="bg-yellow-500 text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleAddProduct(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={onClose}></div>
    </>
  );
}
