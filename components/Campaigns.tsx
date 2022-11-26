import React, { useState } from "react";
import CampaignCard from "./CampaignCard";
import DonateModal from "./DonateModal";

export default function Campaigns() {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  const onClick = () => {
    setShow(true);
  };

  return (
    <>
      <div className="grid grid-cols-campaigns px-4 w-full max-w-[1200px] mx-auto py-8 gap-4">
        <CampaignCard onClick={onClick} />
        <CampaignCard onClick={onClick} />
        <CampaignCard onClick={onClick} />
        <CampaignCard onClick={onClick} />
      </div>
      <DonateModal show={show} onClose={onClose} />
    </>
  );
}
