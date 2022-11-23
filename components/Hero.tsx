import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="w-full max-w-[1000px] mx-auto  my-20 flex">
      <div className="flex-[5]">
        <h2 className="text-[44px] leading-snug font-semibold text-primary">
          Raise 🤑 Funds for your personal needs and <br /> fool the investors
          😭
        </h2>
        <p className="mt-7 text-secondary text-xl font-medium">
          Instantly fool your investors by saying you need funds for your
          mother’s operation.
        </p>
      </div>
      <div className="flex-[4] flex justify-center h-full">
        {/* <button className="relative cursor-pointer p-8 bg-[#1D8399] rounded-2xl text-white text-5xl flex items-center justify-center z-2 before:absolute before:content-[''] before:h-full before:w-full before:bg-gray-700  before:z-1 before:top-2"> */}
        <button className="relative cursor-pointer p-8 bg-[#1D8399] hover:bg-[#13697C] rounded-[32px] text-white text-5xl flex items-center justify-center z-2">
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
