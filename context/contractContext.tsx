/* eslint-disable react-hooks/exhaustive-deps */
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { createContext, useContext } from "react";
import { CONTRACT_ADDRESS } from "../helpers/contractAddress";
import { ethers } from "ethers";

export const contractContext = createContext({});
export const useContractContext = () => useContext(contractContext);

function ContractProvider({ children }: any) {
  const { contract } = useContract(
    "0x3f1aA18045B2A2814F02475f42C7577E4AdBE707"
  );
  const { data: campaign, refetch: getCampaign } = useContractRead(
    contract,
    "campaigns",
    0
  );

  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const contextValue = {
    getCampaign,
    createCampaign,
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
