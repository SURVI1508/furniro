import React from "react";

export const NewArrival = () => {
  return (
    <div
      className="w-full  lg:h-[100vh] flex flex-col justify-center items-end lg:pr-[5rem]"
      style={{ background: "url(../bg.png)" }}
    >
      <div className="w-full lg:w-[50%] bg-[#FFF3E3] p-[2rem] flex gap-4 flex-col sm:rounded-md">
        <span className=" text-[#333] font-[500] text-base tracking-[0.1875rem]">
          New Arrival
        </span>
        <h1 className="text-[#B88E2F] text-[2rem] lg:text-[3.2rem] font-[700]">
          Discover Our <br />
          New Collection
        </h1>
        <span className="font-[500] text-[0.8rem] sm:text-[1.25rem] text-[#333]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </span>
        <button className="bg-[#B88E2F] w-[10rem] h-[3rem] sm:w-[12rem] sm:h-[4rem]">
          <span className="text-white text-[1rem] font-bold">BUY Now</span>
        </button>
      </div>
    </div>
  );
};
