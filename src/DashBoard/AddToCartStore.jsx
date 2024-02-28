import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { RiIndeterminateCircleFill, RiDeleteBin6Fill } from "react-icons/ri";
import {  useDispatch } from "react-redux";
import {
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} from "../store/productSlice";
export const AddToCartStore = ({ product }) => {
  //   const products = useSelector(state => state.product.products);

  const dispatch = useDispatch();
  const handleDeleteProduct = (productId) => {
    dispatch(removeProduct(productId));
  };
  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <FaRegEdit className="text-gray-500 font-bold text-2xl ml-4 mr-2 mt-2" />
        </div>
        <div className="grid grid-cols-4 w-full  place-items-center border-2 border-slate-300  ">
          <div className="">
            <h2 className="pr-2 py-2">{product?.name}</h2>
          </div>

          <div>
            <h2 className="px-4 py-2">{product?.price}</h2>
          </div>

          <div>
            <IoMdAddCircle
              onClick={() => handleIncrementQuantity(product?.id)}
              className="inline-block text-gray-600 text-3xl mx-2"
            />
            <p className="inline-block text-xl mx-2">{product?.quantity}</p>
            <RiIndeterminateCircleFill
              onClick={() => handleDecrementQuantity(product?.id)}
              className="inline-block text-gray-600 text-3xl mx-2"
            />
          </div>

          <div>{product?.quantity * product?.price}</div>
        </div>
        <div>
          <RiDeleteBin6Fill
            onClick={() => handleDeleteProduct(product?.id)}
            className="flex text-red1 font-bold text-2xl mr-4 ml-2 mt-2"
          />
        </div>
      </div>
    </>
  );
};
