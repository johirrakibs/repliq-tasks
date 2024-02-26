import { Button } from "../component/Button"
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { IoMdAddCircle } from "react-icons/io";
import { MdAccessAlarm } from "react-icons/md";

import { MdOutlineCancel } from "react-icons/md";
import { FaRegHandRock } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

export const DashBoard = () => {
  return (
   <>
   <div>

   <div className="flex gap-3">
   <CiMenuBurger />
   <Button icon={<SlNote />} name="Note" />
   <Button icon={<MdOutlineLocalShipping />} name="Shipping" />
   <Button icon={<MdAccessAlarm />} name="Hold" />
   <Button icon={<IoMdAddCircle />} name="New Item" />
   </div>



   <div className="flex gap-3">
 
   <Button icon={<MdOutlineCancel />} name="Cancel" />
   <Button icon={<FaRegHandRock />} name="Hold" />
   <Button icon={<CiDiscount1 />} name="DisCount" />
   <Button icon={<FaHandHoldingUsd />} name="Pay Now" />
   </div>

   </div>
   </>
  )
}
