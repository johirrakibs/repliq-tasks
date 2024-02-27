import { Button } from "../component/Button";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { IoMdAddCircle } from "react-icons/io";
import { MdAccessAlarm } from "react-icons/md";

import { MdOutlineCancel } from "react-icons/md";
import { FaRegHandRock } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { FooterButton } from "../component/FooterButton";
import { User } from "./User";
import { AddToCartStore } from "./AddToCartStore";

export const DashBoard = () => {
  return (
    <>
      <div>
        <div className="flex gap-3 mb-4">
          <CiMenuBurger />
          <Button icon={<SlNote />} name="Note" />
          <Button icon={<MdOutlineLocalShipping />} name="Shipping" />
          <Button icon={<MdAccessAlarm />} name="Hold" />
          <Button icon={<IoMdAddCircle />} name="New Item" />
        </div>


<User />
<AddToCartStore />


        <div className="flex gap-3">
          <FooterButton icon={<MdOutlineCancel />} name="Cancel" />
          <FooterButton icon={<FaRegHandRock />} name="Hold" />
          <FooterButton icon={<CiDiscount1 />} name="DisCount" />
          <FooterButton icon={<FaHandHoldingUsd />} name="Pay Now" />
        </div>
      </div>
    </>
  );
};
