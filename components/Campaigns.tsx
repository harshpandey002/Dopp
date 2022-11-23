import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";

export default function Campaigns() {
  return (
    <div className="grid grid-cols-campaigns px-4 w-full max-w-[1200px] mx-auto gap-4">
      <CampaignCard />
      <CampaignCard />
      <CampaignCard />
      <CampaignCard />
      <CampaignCard />
      <CampaignCard />
      <CampaignCard />
    </div>
  );
}

function CampaignCard() {
  return (
    <div className="flex p-4 border border-gray-300 border-solid rounded-xl gap-4">
      <div className="flex-[4] bg-gray-300 rounded-lg"></div>
      <div className="flex-[6] flex flex-col gap-4">
        <div>
          <h4 className="line-clamp-1 text-2xl font-medium text-primary">
            Charity Miles
          </h4>
          <span className="flex items-center gap-1 text-blue-800 ">
            <a>harshkumarpandey.com</a>
            <BiLinkExternal className="text-sm" />
          </span>
        </div>
        <div>
          <p className="text-sm text-secondary line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            veniam reiciendis libero maiores illo vel placeat veritatis qui.
            Doloremque pariatur, illo mollitia ad nihil dolorem quam perferendis
            ea velit eos?
          </p>

          <div className="h-[28px] mt-3 overflow-hidden rounded-md ">
            <div className="h-full w-1/2 bg-gradient-to-r from-[#cebf36] to-[#96DD7D]" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="flex text-2xl text-primary font-medium items-center gap-1">
              <FaEthereum /> 20 Ether
            </h4>
            <p className="text-secondary text-sm">Raised of 10 Ethers </p>
          </div>
          <div className="w-[44px] h-[44px] rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
