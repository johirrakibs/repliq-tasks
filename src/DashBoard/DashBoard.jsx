import { Button } from "../component/Button";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { IoMdAddCircle } from "react-icons/io";
import { MdAccessAlarm } from "react-icons/md";
import { User } from "./User";
import { AddToCartStore } from "./AddToCartStore";
import { Footer } from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store/productSlice";

export const DashBoard = () => {
  const products = useSelector((state) => state.product.products);
  const totalPrice = useSelector((state) => state.product.totalPrice);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className="flex justify-around gap-3 mt-3 mb-4  md:flex md:justify-around md:gap-3 md:mt-3 md:mb-4 lg:flex lg:justify-around">
          <button className="bg-white-300 text-gray-800 font-bold text-2xl px-3 py-2 rounded-md flex items-center justify-center">
            <CiMenuBurger />
          </button>
          <Button icon={<SlNote />} name="Note" />
          <Button icon={<MdOutlineLocalShipping />} name="Shipping" />
          <Button icon={<MdAccessAlarm />} name="Hold Orders" />
          <Button icon={<IoMdAddCircle />} name="New Item" />
        </div>

        <User />
        {products.map((product) => {
          return <AddToCartStore key={product.id} product={product} />;
        })}
        <div>
          <div className="flex flex-col justify-end	items-end mx-4 my-4">
            <div className="w-60 ">
              <hr className="border-double	border-gray-500" />
              <div className="flex justify-between">
                <p className="text-gray-500">Sub Total </p>
                <p className="text-gray-700 font-semibold	text-base ">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <hr className="border-double	border-gray-500" />
              <div className="flex justify-between">
                <p className="text-gray-500">Tax </p>
                <p className="text-gray-700 font-semibold	text-base ">$00.50</p>
              </div>
              <hr className="border-double	border-gray-500" />

              <div className="flex justify-between">
                <p className="text-gray-500">Shipping </p>
                <p className="text-gray-700 font-semibold	text-base">$00.00</p>
              </div>
              <hr className="border-double	border-gray-500" />

              <div className="flex justify-between ">
                <p className="text-sky-600">Discount on Cart </p>
                <p className="text-gray-700 font-semibold	text-base">$00.00</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between bg-blue-100 bg-teal-100 text-sky-600	 p-4 mx-4 rounded-md">
            <div>
              <p>Products Count</p>
            </div>

            <div className="flex text-2xl justify-between font-bold">
              <p>Total</p>
              <p className="ml-20 ">${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
