import { PiUserCircleFill } from "react-icons/pi";
import { MdAddCircleOutline } from "react-icons/md";

export const User = () => {
  return (
    <>
    <div className="bg-ash1 p-4 rounded-md mb-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <PiUserCircleFill className="mr-2 " />
        <span className="font-semibold">Steve Jobs</span>
      </div>
      <MdAddCircleOutline className="text-green-500" />
    </div>
  </div>
    </>
  )
}
