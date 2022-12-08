import {
  useAddress,
  useContractWrite,
  useStorageUpload,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { useContractContext } from "../context/contractContext";
import { formatAddr } from "../helpers/formatAddr";
import { ModalHeader } from "./ModalHeader";
import { toast } from "react-toastify";

const inputGroup = "flex flex-col gap-1";

export const inputStyles =
  "outline-1 w-full outline outline-gray-300  focus:outline-[#1D8399] active:outline-[#1D8399]  focus:outline-2 active:outline-2  py-1 px-2 rounded-sm";

export default function CreateCampaignModal({
  show,
  onClose,
}: any): JSX.Element | null {
  if (!show) return null;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<any>("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    amount: 0,
    url: "",
  });

  const { contract, getCampaigns }: any = useContractContext();
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const { mutateAsync: uploadToIpfs } = useStorageUpload();

  const handleDrop = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const campaignData = {
    ...formData,
    image,
  };

  const handleClose = () => {
    if (isLoading) return;
    onClose();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const { name, description, amount, url } = formData;

    try {
      const uploadUrl = await toast.promise(
        uploadToIpfs({
          data: [image],
          options: {
            uploadWithGatewayUrl: true,
            uploadWithoutDirectory: true,
          },
        }),
        {
          pending: "Uploading Image to IPFS",
          success: "Image uploaded.",
          error: "Some error occured.",
        }
      );

      await toast.promise(
        createCampaign([
          uploadUrl[0],
          name,
          url,
          description,
          ethers.utils.parseEther(amount.toString()),
        ]),
        {
          pending: "Creating your campaign.",
          success: "Campaign Created!!",
          error: "Some error occured.",
        }
      );

      setIsLoading(false);
      getCampaigns();
      onClose();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const { name, description, url, amount } = formData;
  return (
    <>
      <div
        onClick={handleClose}
        className="fixed w-full h-full bg-gray-900/[.6] backdrop-blur-sm z-10"
      />
      <div
        className={`w-11/12 max-w-[800px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-20`}
      >
        <ModalHeader title="Create Campaign" onClose={handleClose} />
        <div className="flex gap-8 p-4 pt-0">
          {(name || image || description || url || !!amount) && (
            <div className="hidden md:flex flex-1 items-center justify-center">
              <PreviewCampaignCard data={campaignData} />
            </div>
          )}
          <form
            id="hideScroll"
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 gap-4 max-h-[80vh] px-1 overflow-auto"
          >
            <div className={inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className={inputStyles}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={inputGroup}>
              <label htmlFor="url">Website URL</label>
              <input
                id="url"
                name="url"
                type="text"
                className={inputStyles}
                value={formData.url}
                onChange={handleChange}
              />
            </div>
            <div className={inputGroup}>
              <label htmlFor="description">Description</label>
              <textarea
                rows={3}
                id="description"
                name="description"
                className={inputStyles}
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className={inputGroup}>
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                name="amount"
                type="number"
                className={inputStyles}
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <input type="file" name="image" onChange={handleDrop} />
            <div className="flex items-center justify-between mt-2">
              <button
                disabled={isLoading}
                onClick={handleClose}
                className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-primary rounded-md"
              >
                Cancle
              </button>
              <button
                disabled={isLoading}
                type="submit"
                className="py-2 px-4 bg-[#1D8399] hover:bg-[#13697C] text-white rounded-md"
              >
                Create Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function PreviewCampaignCard({ data }: any) {
  const { image, name, description, url, amount } = data;
  const [file, setFile] = useState();

  useEffect(() => {
    if (!image) return;

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      const imageUri: any = reader.result;
      setFile(imageUri);
    };
  }, [image]);

  const address: any = useAddress();

  return (
    <div className="flex flex-1 flex-col p-4 border border-gray-300 border-solid rounded-xl gap-4">
      {image && (
        <div className="aspect-w-2 aspect-h-1 w-full bg-gray-300 rounded-lg overflow-hidden">
          <img className="object-cover" src={file} alt={name} />
        </div>
      )}
      <div className="flex-[6] flex flex-col gap-4">
        <div>
          {name && (
            <h4 className="line-clamp-1 text-2xl font-medium text-primary">
              {name}
            </h4>
          )}
          {url && (
            <span className="flex items-center gap-1 text-blue-800 ">
              <a className="cursor-pointer hover:underline ">{url}</a>
              <BiLinkExternal className="text-sm" />
            </span>
          )}
        </div>
        <div>
          {description && (
            <p className="text-sm text-secondary line-clamp-3">{description}</p>
          )}
          {!!amount && (
            <div className="h-[28px] mt-3 overflow-hidden rounded-[4px] bg-neutral-200 ">
              <div className="h-full w-3/4 bg-gradient-to-r from-[#cebf36] to-[#96DD7D]" />
            </div>
          )}
        </div>
        {!!amount && (
          <div className="flex items-center justify-between">
            <div>
              <h4 className="flex text-2xl text-primary font-medium items-center gap-1">
                <FaEthereum /> 0 Ether
              </h4>
              <p className="text-secondary text-sm">
                Raised of {amount} Ethers{" "}
              </p>
            </div>
            <p className="border border-solid border-[#e3e3e3] rounded-md px-2 py-1 text-sm text-gray-400 hover:bg-gray-200">
              {formatAddr(address)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
