import { NFTStorage, File } from "nft.storage";
const API_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY;

export const uploadToIpfs = async (campaign: any) => {
  const client = new NFTStorage({ token: API_KEY });
  const metadata = await client.store({
    name: campaign.name,
    description: campaign.description,
    image: new File([campaign.image], campaign.name, { type: "image/png" }),
  });

  return metadata;
};
