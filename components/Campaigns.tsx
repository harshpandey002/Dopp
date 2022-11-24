import React from "react";
import CampaignCard from "./CampaignCard";
import CreateCampaignModal from "./CreateCampaignModal";

export default function Campaigns() {
  return (
    <>
      <div className="grid grid-cols-campaigns px-4 w-full max-w-[1200px] mx-auto gap-4">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>
      <CreateCampaignModal show={true} />
    </>
  );
}
