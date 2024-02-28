export const Button = ({ icon, name }) => {
  return (
    <>
    <div className="text-center "> 
    <button className="bg-gray-300 text-indigo-600 text-2xl  sm:text-base md:text-lg lg:text-xl xl:text-2xl px-3 py-2 rounded-md flex items-center justify-center">
      {icon} 
      <span className="ml-2 text-red-700 font-semibold text-base">{name}</span> 
    </button>
  </div>
  </>
  );
};
