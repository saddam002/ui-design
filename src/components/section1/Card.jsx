import React from "react";

function Card({ photoName, btnText, id }) {
  return (
    <div className="relative h-full w-[33%] ">
      <img className="h-full object-cover rounded-3xl" src={photoName} alt="" />
      <div
        className="h-full absolute top-0 left-0 flex flex-col
        justify-between px-3.5 py-3"
      >
        <h1
          className=" h-8 w-8 text-center rounded-full
        bg-white font-bold ml-3"
        >
          {id}
        </h1>
        <div className="px-3 pb-3.5">
          <p className="mb-9 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ad
            distinctio atque corrupti aliquid, impedit corporis nisi consequatur
            temporibus et?
          </p>
          <button className="text-sm bg-gray-400 py-1 px-2 rounded-md text-white text-[10px]">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
