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

// !Create Campaigns
// try {
//     const amount = 1;

//     const data = await createCampaign([
//       "https://images.unsplash.com/photo-1667429517242-90d8d7e5165f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTg5NjE5MQ&ixlib=rb-4.0.3&q=80&w=600",
//       "Bikrr",
//       "savicmotorcycles.com",
//       "Please donate money so that I can buy this bike.",
//       ethers.utils.parseEther(amount.toString()),
//     ]);
//   } catch (error) {
//     console.log(error);
//   }
