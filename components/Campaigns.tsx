import React, { useState } from "react";
import { useContractContext } from "../context/contractContext";
import CampaignCard from "./CampaignCard";
import DonateModal from "./DonateModal";

export default function Campaigns() {
  const [show, setShow] = useState({});
  const { campaigns }: any = useContractContext();

  const onClose = () => {
    setShow({});
  };

  const onClick = (campaign: any) => {
    setShow(campaign);
  };

  return (
    <>
      <div className="grid grid-cols-campaigns px-4 w-full max-w-[1200px] mx-auto py-8 gap-4">
        {campaigns.map((campaign: any) => (
          <CampaignCard onClick={onClick} data={campaign} />
        ))}
      </div>
      <DonateModal show={show} onClose={onClose} />
    </>
  );
}
