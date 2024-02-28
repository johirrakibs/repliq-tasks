import { Button } from "../component/Button";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { IoMdAddCircle } from "react-icons/io";
import { MdAccessAlarm } from "react-icons/md";
import { User } from "./User";
import { AddToCartStore } from "./AddToCartStore";
import { Footer } from "./Footer";

export const DashBoard = () => {
  return (
    <>
      <div>
        <div className="flex justify-around gap-3 mt-3 mb-4 md:flex md:justify-around md:gap-3 md:mt-3 md:mb-4">
          <button className="bg-white-300 text-gray-800 font-bold text-2xl px-3 py-2 rounded-md flex items-center justify-center">
            <CiMenuBurger />
          </button>
          <Button icon={<SlNote />} name="Note" />
          <Button icon={<MdOutlineLocalShipping />} name="Shipping" />
          <Button icon={<MdAccessAlarm />} name="Hold Orders" />
          <Button icon={<IoMdAddCircle />} name="New Item" />
        </div>

        <User />
        <AddToCartStore />

        <Footer />
      </div>
    </>
  );
};
