import { useStorageUpload } from "@thirdweb-dev/react";

export const uploadToIpfs = async (campaign: any) => {
  const { name, description, image } = campaign;

  const metadata = {
    name,
    description,
    image,
  };

  const cid = await storage.upload(metadata);

  return cid;
};
