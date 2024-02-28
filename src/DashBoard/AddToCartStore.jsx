import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { RiIndeterminateCircleFill, RiDeleteBin6Fill } from "react-icons/ri";
export const AddToCartStore = () => {
  return (
    <>
      <div>
        <div className="flex">
          <FaRegEdit className="text-gray-500 font-bold text-2xl ml-4 mr-2 mt-2" />
          <div className=" w-full border-2 border-gray-200 mb-8">
            <table className="w-full">
              <tbody className=" gap-8 ">
                <tr>
                  <td className="pr-2 py-2">name</td>
                  <td className="px-4 py-2">price</td>
                  <td>
                    <IoMdAddCircle className="inline-block text-gray-600 text-3xl mx-2" />
                    <p className="inline-block text-xl mx-2">0</p>
                    <RiIndeterminateCircleFill className="inline-block text-gray-600 text-3xl mx-2" />
                  </td>
                  <td className="px-4 py-2">total price</td>
                </tr>
              </tbody>
            </table>
          </div>
          <RiDeleteBin6Fill className="flex text-red1 font-bold text-2xl mr-4 ml-2 mt-2" />
        </div>

        <div className="flex flex-col justify-end	items-end mx-4 my-4">
          <div className="w-60 ">
            <hr className="border-double	border-gray-500" />
            <div className="flex justify-between">
              <p className="text-gray-500">Sub Total </p>
              <p className="text-gray-700 font-semibold	text-base ">$5025.50</p>
            </div>
            <hr className="border-double	border-gray-500" />
            <div className="flex justify-between">
              <p className="text-gray-500">Tax </p>
              <p className="text-gray-700 font-semibold	text-base ">$25.50</p>
            </div>
            <hr className="border-double	border-gray-500" />

            <div className="flex justify-between">
              <p className="text-gray-500">Shipping </p>
              <p className="text-gray-700 font-semibold	text-base">$5.50</p>
            </div>
            <hr className="border-double	border-gray-500" />

            <div className="flex justify-between ">
              <p className="text-sky-600">Discount on Cart </p>
              <p className="text-gray-700 font-semibold	text-base">$10.00</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between bg-blue-100 bg-teal-100 text-sky-600	 p-4 mx-4 rounded-md">
          <div>
            <p>Products Count (13)</p>
          </div>

          <div className="flex text-2xl justify-between font-bold">
            <p>Total</p>
            <p className="ml-20 ">$5005.50</p>
          </div>
        </div>
      </div>
    </>
  );
};
