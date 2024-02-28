export const Button = ({ icon, name }) => {
  return (
    <>
    <div className="text-center"> 
    <button className="bg-gray-300 text-gray-800 text-2xl px-3 py-2 rounded-md flex items-center justify-center">
      {icon} 
      <span className="ml-2 text-red-700 font-bold  text-xl">{name}</span> 
    </button>
  </div>
  </>
  );
};
