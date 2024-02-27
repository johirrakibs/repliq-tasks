export const Button = ({ icon, name }) => {
  return (
    <>
      <div className="">
        <button className="bg-ash ">
          {icon}
          <span>{name}</span>
        </button>
      </div>
    </>
  );
};
