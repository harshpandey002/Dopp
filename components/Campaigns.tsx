import React from "react";
import { BiLinkExternal } from "react-icons/bi";

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
      <div className="flex-[6]">
        <div>
          <h4 className="text-lg font-medium text-primary">Charity Miles</h4>
          <span className="flex items-center gap-1 text-blue-800 ">
            <a>harshkumarpandey.com</a>
            <BiLinkExternal className="text-sm" />
          </span>
        </div>
        <div>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            beatae, quisquam rerum consequa...
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
