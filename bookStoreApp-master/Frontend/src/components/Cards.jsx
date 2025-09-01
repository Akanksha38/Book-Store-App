import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card dark:bg-base-100 w-96 shadow-sm h-full flex flex-col justify-between">
  <figure className="px-10 pt-10">
    <img
      src={item.image}
      alt="Shoes"
      className="rounded-xl h-40 object-cover" />
  </figure>
  <div className="card-body items-center text-center flex flex-col justify-between flex-grow">
    <h2 className="card-title">{item.name}</h2>
    <p className="font-dancing text-xl">{item.title}</p>
    <div className="flex justify-between items-center w-full px-4">
  {/* Left (Price) */}
  <button className="btn light:btn-primary">{item.price}</button>

  {/* Right (Dive In) */}
  <button className="btn light:btn-primary hover:bg-gray-700 duration-200">Dive In</button>
</div>

  </div>
</div>
      </div>
    </>
  );
}

export default Cards;
