/* eslint-disable react-hooks/exhaustive-deps */
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import { abi } from "../helpers/abi";

export const contractContext = createContext({});
export const useContractContext = () => useContext(contractContext);

function ContractProvider({ children }: any) {
  const [campaigns, setCampaigns] = useState<any>([]);

  const { contract } = useContract(
    "0x3f1aA18045B2A2814F02475f42C7577E4AdBE707"
  );

  const { data: campaignCount, refetch: getCampaignCount } = useContractRead(
    contract,
    "campaignCount"
  );

  useEffect(() => {
    if (!campaignCount) return;
    getCampaigns();
  }, [campaignCount]);

  const getCampaigns = async () => {
    let _campaigns = [];

    for (let i = 0; i < campaignCount.toNumber(); i++) {
      const data = await contract?.call("campaigns", i);
      _campaigns.push(data);
    }

    setCampaigns(_campaigns);
  };

  const contextValue = {
    contract,
    campaigns,
    getCampaigns,
  };

  return (
    <contractContext.Provider value={contextValue}>
      {children}
    </contractContext.Provider>
  );
}

export default ContractProvider;
