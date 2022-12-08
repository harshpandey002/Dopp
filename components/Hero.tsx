import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import CreateCampaignModal from "./CreateCampaignModal";

export default function Hero() {
  const [show, setShow] = useState(false);
  const address = useAddress();

  const classNames = address
    ? "flex-col md:flex-row"
    : "text-center max-w-[700px] flex-col";

  const headingClass = address ? "md:text-start" : "";

  const onClose = () => {
    setShow(false);
  };

  const handleShow = async () => {
    setShow(true);
  };

  return (
    <>
      <div
        className={`w-full max-w-[1000px] mx-auto mt-[4rem] md:mt-[6rem] mb-[2rem] md:mb-[6rem]  flex ${classNames}`}
      >
        <div className="flex-[5] px-4">
          <h2
            className={`text-[28px] md:text-[44px] text-center ${headingClass} leading-snug font-semibold text-primary`}
          >
            Raise 🤑 Funds for your personal needs and {address ? <br /> : ""}{" "}
            get rich quickly 💵
          </h2>
          <p
            className={`mt-7 text-secondary text-center ${headingClass} text-md md:text-xl md:font-medium`}
          >
            <a
              className="bg-[#1D8399] py-[1px] px-2 text-white "
              href="https://www.harshkumarpandey.com/blogs"
              target="_blank"
            >
              Learn
            </a>{" "}
            how to build this mini dapp using most popular tech-stack out there
            i.e. Solidity, Thirdweb, Tailwindcss, Nextjs and TypeScript.
          </p>
        </div>
        {address ? (
          <div className="flex-[4] flex justify-center h-full mt-8 md:mt-0">
            {/* <button className="relative cursor-pointer p-8 bg-[#1D8399] rounded-2xl text-white text-5xl flex items-center justify-center z-2 before:absolute before:content-[''] before:h-full before:w-full before:bg-gray-700  before:z-1 before:top-2"> */}
            <button
              onClick={handleShow}
              className="relative cursor-pointer p-6 md:p-8 bg-[#1D8399] hover:bg-[#13697C]  rounded-[28px] md:rounded-[32px] text-white text-4xl md:text-5xl flex items-center justify-center z-2"
            >
              <BsArrowRight />
            </button>
          </div>
        ) : (
          <div className="w-max mx-auto mt-8 ">
            <ConnectWallet accentColor="#1d8399" />
          </div>
        )}
      </div>
      <CreateCampaignModal show={show} onClose={onClose} />
    </>
  );
}
