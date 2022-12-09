import { MediaRenderer } from "@thirdweb-dev/react";
import copy from "copy-to-clipboard";
import { ethers } from "ethers";
import { useRef, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { toast } from "react-toastify";
import { useContractContext } from "../context/contractContext";
import { formatAddr } from "../helpers/formatAddr";
import { inputStyles } from "./CreateCampaignModal";
import { ModalHeader } from "./ModalHeader";

export default function DonateModal({ show: campaign, onClose }: any) {
  if (!campaign.name) return null;
  const amountRef = useRef<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { contract, getCampaigns }: any = useContractContext();

  const {
    id,
    name,
    description,
    image,
    totalAmount,
    amountReceived,
    url,
    author,
    goalAchieved,
  } = campaign;

  const received = Math.floor(
    Number(ethers.utils.formatEther(amountReceived.toString()))
  );

  const donate = async () => {
    const amount = amountRef.current.value;
    if (amount <= 0) {
      return;
    }
    setIsLoading(true);

    try {
      await toast.promise(
        contract.call("donateFunds", id.toNumber(), {
          value: ethers.utils.parseEther(amount),
        }),
        {
          pending: "Transfering funds to author.",
          success: "Funds transfered.",
          error: {
            render({ data }: any) {
              return data.reason;
            },
          },
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

  const handleClose = () => {
    if (isLoading) return;
    onClose();
  };

  const copyAuthor = (e: any) => {
    e.stopPropagation();
    copy(author);
    toast.success(`${formatAddr(author)} Copied`);
  };

  const total = Number(ethers.utils.formatEther(totalAmount.toString()));

  return (
    <>
      <div
        onClick={handleClose}
        className="fixed w-full h-full top-0 bg-gray-900/[.6] backdrop-blur-sm z-10"
      />
      <div
        className={`w-11/12 max-w-[460px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-20`}
      >
        <ModalHeader title="Donate Funds" onClose={handleClose} />
        <div
          id="hideScroll"
          className="flex flex-1 flex-col max-h-[70vh] overflow-auto px-4 gap-4"
        >
          <div
            id="media"
            className="aspect-w-2 aspect-h-1 w-full bg-gray-300 rounded-lg overflow-hidden"
          >
            {/* <img className="object-cover" src={image} alt="dummy" /> */}
            <MediaRenderer src={image} alt={name} />
          </div>
          <div className="flex-[6] flex flex-col gap-4">
            <div>
              <h4 className="line-clamp-1 text-2xl font-medium text-primary">
                {name}
              </h4>
              {url && (
                <span className="flex items-center gap-1 text-blue-800 ">
                  <a
                    href={`https://${url}`}
                    target="_blank"
                    className="cursor-pointer hover:underline "
                  >
                    {url}
                  </a>
                  <BiLinkExternal className="text-sm" />
                </span>
              )}
            </div>
            <p className="text-sm text-secondary ">{description}</p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="flex text-2xl text-primary font-medium items-center gap-1">
                  <FaEthereum /> {received} Ether
                </h4>
                <p className="text-secondary text-sm">
                  Raised of {total} Ethers
                </p>
              </div>
              <p
                onClick={copyAuthor}
                className="border cursor-pointer border-solid border-[#e3e3e3] rounded-md px-2 py-1 text-sm text-gray-400 hover:bg-gray-200"
              >
                {formatAddr(author)}
              </p>
            </div>
            <div className="flex flex-col gap-2 sticky bottom-0 bg-white py-4">
              <input
                className={inputStyles}
                type="number"
                min="0"
                placeholder="Enter Amount"
                ref={amountRef}
              />
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
                  onClick={donate}
                  type="submit"
                  className="py-2 px-4 bg-[#1D8399] hover:bg-[#13697C] text-white rounded-md"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
