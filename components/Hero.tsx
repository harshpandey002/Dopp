import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useContractContext } from "../context/contractContext";
import CreateCampaignModal from "./CreateCampaignModal";

export default function Hero() {
  const [show, setShow] = useState(false);
  const address = useAddress();

  const classNames = address ? "" : "text-center max-w-[700px] flex-col";

  const onClose = () => {
    setShow(false);
  };

  const handleShow = async () => {
    // try {
    //   const amount = 0.6;
    //   await createCampaign([
    //     "https://images.unsplash.com/photo-1669554108285-dc5c2786ed61?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTkxMjk0MQ&ixlib=rb-4.0.3&q=80&w=600",
    //     "Bikrrr",
    //     "I want to this bike, please donate money",
    //     ethers.utils.parseEther(amount.toString()),
    //   ]);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <div
        className={`w-full max-w-[1000px] mx-auto my-[6rem] flex  ${classNames}`}
      >
        <div className="flex-[5]">
          <h2 className="text-[44px] leading-snug font-semibold text-primary">
            Raise 🤑 Funds for your personal needs and {address ? <br /> : ""}{" "}
            fool the investors 😭
          </h2>
          <p className="mt-7 text-secondary text-xl font-medium">
            Instantly fool your investors by saying you need funds for your
            mother’s surgery.
          </p>
        </div>
        {address ? (
          <div className="flex-[4] flex justify-center h-full">
            {/* <button className="relative cursor-pointer p-8 bg-[#1D8399] rounded-2xl text-white text-5xl flex items-center justify-center z-2 before:absolute before:content-[''] before:h-full before:w-full before:bg-gray-700  before:z-1 before:top-2"> */}
            <button
              onClick={handleShow}
              className="relative cursor-pointer p-8 bg-[#1D8399] hover:bg-[#13697C] rounded-[32px] text-white text-5xl flex items-center justify-center z-2"
            >
              <BsArrowRight />
            </button>
          </div>
        ) : (
          <div className="w-max mx-auto mt-8 ">
            <ConnectWallet accentColor="#343434" />
          </div>
        )}
      </div>
      <CreateCampaignModal show={show} onClose={onClose} />
    </>
  );
}
