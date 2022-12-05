import { useStorageUpload } from "@thirdweb-dev/react";

export const uploadToIpfs = async (image: any) => {
  const { mutateAsync: upload } = useStorageUpload();

  const cid = await upload({ data: [image] });

  return cid[0];
};
