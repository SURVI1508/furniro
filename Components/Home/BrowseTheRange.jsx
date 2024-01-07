import { CatItems } from "@/app/db";
import React from "react";

const BrowseTheRange = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-[2rem] sm:gap-[4rem] py-[2rem] sm:py-[4rem] ">
      <div className="text-center">
        <h1 className="text-[#333] text-[1.5rem] sm:text-[2rem] font-bold">
          Browse The Range
        </h1>
        <span className="text-[#666] font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <div className="lg:w-[80%] grid grid-cols-1  sm:grid-cols-3 gap-5 px-4 sm:px-10">
        {CatItems.map((value, index) => {
          const { catimage, catname } = value;
          return (
            <div key={index} className="flex flex-col gap-4 text-center">
              <div className="aspect-square lg:h-[30rem] rounded lg:rounded-[0.6rem] overflow-hidden ">
                <img
                  className="w-full h-full object-cover "
                  src={catimage}
                  alt={catname}
                />
              </div>
              <span className="font-[600] text-[1.5rem] capitalize">
                {catname}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseTheRange;
