import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { RiIndeterminateCircleFill, RiDeleteBin6Fill } from "react-icons/ri";
export const AddToCartStore = () => {
  return (
   <>
   <div>
   <div className="bg-ash flex">
   <FaRegEdit />
 <div className="flex">
 <table >
 <tbody className="flex gap-8 justify-center">
 <td>name</td>
 <td>price</td>
 <IoMdAddCircle />
 <p>0</p>
 <RiIndeterminateCircleFill />
 <td>total price</td>
 </tbody>
 </table>
 </div>
   <RiDeleteBin6Fill />
   </div>

   <div className='flex flex-col justify-end justify-items-end	'>
   <div>
   <p>SUb Total </p>
   <p>$5025.50</p>
   <hr className='border-double	border-gray-500'/>
   </div>

   <div>
   <p>Tax </p>
   <p>$25.50</p>
   <hr className='border-double	border-gray-500'/>
   </div>

   <div>
   <p>Shipping </p>
   <p>$5.50</p>
   <hr className='border-double	border-gray-500'/>
   </div>

   <div>
   <p>Discount on Cart </p>
   <p>$10.00</p>
   <hr className='border-double	border-gray-500'/>
   </div>
   </div>

   <div className='flex justify-between bg-blue-100'>
   <div>
   <p>Products Count (13)</p>
   </div>

   <div className='flex justify-around'>
   <p>Total</p>
   <p>$5005.50</p>
   </div>
   </div>
   </div>
   </>
  )
}
