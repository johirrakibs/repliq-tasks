import { MdOutlineCancel } from "react-icons/md";
import { FaRegHandRock } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

export const Footer = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row md:justify-around md:gap-3 md:mt-3 md:mb-4">
  <button className="bg-red text-red1 text-2xl px-3 py-2 rounded-md flex items-center justify-center mb-3 md:mb-0 md:mr-0">
    <MdOutlineCancel />
    <span className="ml-2 text-red-700 font-semibold text-xl px-4">Cancel</span>
  </button>

  <button className="bg-ash3 text-ash2 text-2xl px-3 py-2 rounded-md flex items-center justify-center mb-3 md:mb-0 md:mr-0">
    <FaRegHandRock />
    <span className="ml-2 text-red-700 font-semibold text-xl px-4">Hold</span>
  </button>

  <button className="bg-ash3 text-ash4 text-2xl px-3 py-2 rounded-md flex items-center justify-center mb-3 md:mb-0 md:mr-0">
    <CiDiscount1 />
    <span className="ml-2 text-red-700 font-semibold text-xl px-4">Discount</span>
  </button>

  <button className="bg-blue text-blue1 text-2xl px-3 py-2 rounded-md flex items-center justify-center mb-3 md:mb-0 md:mr-0">
    <FaHandHoldingUsd />
    <span className="ml-2 text-red-700 font-semibold text-xl px-4">Pay Now</span>
  </button>
</div>

    </>
  );
};
