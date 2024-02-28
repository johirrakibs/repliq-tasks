import { PiUserCircleFill } from "react-icons/pi";
import { MdAddCircleOutline } from "react-icons/md";

export const User = () => {
  return (
    <>
      <div className="bg-gray-300 p-4 mb-4 mx-4 rounded-md">
        <div className="flex justify-between items-center text-indigo-600 font-semibold text-lg md:text-2xl">
          <div className="flex items-center">
            <PiUserCircleFill className="mr-2 text-lg md:text-xl" />
            <span className="">Steve Jobs</span>
          </div>
          <MdAddCircleOutline className="text-lg md:text-xl" />
        </div>
      </div>
    </>
  );
};
