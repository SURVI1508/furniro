import { NavLinks } from "@/app/db";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="px-4 lg:px-[2rem] py-[2rem] lg:py-[5rem] bg-white w-full flex gap-9 flex-col border border-t">
      <div className="w-full lg:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-0">
        <div className="flex flex-col gap-4 sm:gap-10 col-span-2 text-left lg:pr-[7rem]  ">
          <h1 className="font-bold text-[1.3rem] text-black">Funiro.</h1>
          <span className="text-[#9F9F9F] font-normal">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </span>
        </div>
        <div className=" flex gap-4 sm:gap-10 flex-col mt-8 lg:mt-0">
          <span className="text-[#9F9F9F] font-normal ">Links</span>

          <div className="flex flex-col gap-4 lg:gap-[2.88rem]">
            {NavLinks.map((value, index) => {
              const { tab, path } = value;
              return (
                <Link
                  href={path}
                  key={index}
                  className="text-[#000] text-base font-[500] capitalize"
                >
                  {tab}
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" flex gap-4 sm:gap-10 flex-col mt-8 lg:mt-0">
          <span className="text-[#9F9F9F] font-normal ">Help</span>

          <div className="flex flex-col gap-4 lg:gap-[2.88rem]">
            <Link
              href="#"
              className="text-[#000] text-base font-[500] capitalize"
            >
              Payment Options
            </Link>{" "}
            <Link
              href="#"
              className="text-[#000] text-base font-[500] capitalize"
            >
              Returns
            </Link>{" "}
            <Link
              href="#"
              className="text-[#000] text-base font-[500] capitalize"
            >
              Privacy Policies
            </Link>
          </div>
        </div>

        <form className="flex gap-4 sm:gap-10 flex-col mt-8 lg:mt-0 ">
          <h5 className="text-[#9F9F9F] font-normal ">Newsletter</h5>
          <div className="flex flex-row gap-2">
            <input
              className="outline-none border-b border-black  flex placeholder:text-[#9F9F9F] placeholder:text-[0.7rem] font-[400] text-[0.873rem] "
              type="email"
              placeholder="Enter Your Email Address"
              required
            />

            <button className="uppercase font-[500] text-[0.75rem] border-b border-black ">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
