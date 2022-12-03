import { ethers } from "ethers";
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

  let pending: any = [];
  let fulfilled: any = [];

  campaigns.forEach((data: any) => {
    if (
      Number(ethers.utils.formatEther(data.amountReceived.toString())) <
      Number(ethers.utils.formatEther(data.totalAmount.toString()))
    ) {
      pending.push(data);
    } else {
      fulfilled.push(data);
    }
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-campaigns px-4 w-full max-w-[1200px] mx-auto py-8 gap-4">
        {pending.map((campaign: any) => (
          <CampaignCard onClick={onClick} data={campaign} />
        ))}
      </div>

      <div className="grid grid-cols-campaigns px-4 w-full max-w-[1200px] mx-auto py-8 gap-4">
        {fulfilled.map((campaign: any) => (
          <CampaignCard onClick={() => {}} data={campaign} disabled />
        ))}
      </div>
      <DonateModal show={show} onClose={onClose} />
    </div>
  );
}
