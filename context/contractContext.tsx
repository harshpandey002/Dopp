/* eslint-disable react-hooks/exhaustive-deps */
import { useContract, useContractRead } from "@thirdweb-dev/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

export const contractContext = createContext({});
export const useContractContext = () => useContext(contractContext);

function ContractProvider({ children }: any) {
  const [campaigns, setCampaigns] = useState<any>([]);
  const [loadingCampigns, setLoadingCampigns] = useState<any>(false);

  const { contract } = useContract(
    // "0x3f1aA18045B2A2814F02475f42C7577E4AdBE707"
    "0xbDA30644945181E76Ce82e479a4AF159bBF8b3Cb"
  );

  const { data: campaignCount, refetch: getCampaignCount } = useContractRead(
    contract,
    "campaignCount"
  );

  useEffect(() => {
    if (!campaignCount) return;

    getCampaigns();
  }, [campaignCount?.toNumber()]);

  async function getCampaigns() {
    let _campaigns = [];

    setLoadingCampigns(true);
    try {
      for (let i = 0; i < campaignCount.toNumber(); i++) {
        const data = await contract?.call("campaigns", i);
        _campaigns.push(data);
      }
      setLoadingCampigns(false);
      setCampaigns(_campaigns);
    } catch (error) {
      setLoadingCampigns(false);
    }
  }

  const contextValue = {
    contract,
    loadingCampigns,
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
