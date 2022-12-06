import { ethers } from "ethers";
import React, { useState } from "react";
import { useContractContext } from "../context/contractContext";
import CampaignCard from "./CampaignCard";
import DonateModal from "./DonateModal";
import { ImSpinner2 } from "react-icons/im";

export default function Campaigns() {
  const [show, setShow] = useState({});
  const { campaigns, loadingCampigns }: any = useContractContext();

  const onClose = () => {
    setShow({});
  };

  const onClick = (campaign: any) => {
    setShow(campaign);
  };

  let pending: any = [];
  let fulfilled: any = [];

  campaigns.forEach((data: any) => {
    if (data.goalAchieved) {
      fulfilled.push(data);
    } else {
      pending.push(data);
    }
  });

  if (loadingCampigns) {
    return (
      <div className="w-full flex items-center justify-center">
        <ImSpinner2 className="text-2xl animate-spin" />
      </div>
    );
  }

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
