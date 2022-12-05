import { MediaRenderer, useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { BiLinkExternal } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { toast } from "react-toastify";
import { formatAddr } from "../helpers/formatAddr";

export default function CampaignCard({ data = {}, onClick, disabled }: any) {
  const { image, name, description, url, totalAmount, amountReceived, author } =
    data;

  const received = Number(ethers.utils.formatEther(amountReceived.toString()));

  const total = Number(ethers.utils.formatEther(totalAmount.toString()));

  const width = disabled ? "100%" : Math.floor((received / total) * 100) + "%";

  const containerClass = disabled ? "" : "hover:border-gray-500 cursor-pointer";

  const gradientClass = disabled
    ? " from-[#cebf36] to-[#96DD7D]"
    : "from-[#cebf36] to-[#96DD7D]";

  let src = image.replace("ipfs://", "https://ipfs.io/ipfs/");

  const handleAuthor = (e: any) => {
    e.stopPropagation();
    toast.success("Copied");
  };

  return (
    <div
      onClick={() => onClick(data)}
      className={`flex flex-1 flex-col p-4 border border-gray-300 border-solid rounded-xl gap-4 ${containerClass}`}
    >
      <div
        id="media"
        className="aspect-w-2 aspect-h-1 w-full bg-gray-300 rounded-lg overflow-hidden"
      >
        {/* {image && <img className="object-cover" src={src} alt={name} />} */}
        <MediaRenderer src={src} alt={name} />
      </div>
      <div className="flex-[6] flex flex-col gap-4">
        <div>
          <h4 className="line-clamp-1 text-2xl font-medium text-primary">
            {name}
          </h4>
          <span className="flex items-center gap-1 text-blue-800 ">
            {url && (
              <>
                <a className="cursor-pointer hover:underline ">{url}</a>
                <BiLinkExternal className="text-sm" />
              </>
            )}
          </span>
        </div>
        <div>
          <p className="text-sm text-secondary line-clamp-3">{description}</p>

          <div className="h-[28px] mt-3 overflow-hidden rounded-[4px] bg-neutral-200 ">
            <div
              style={{ width }}
              className={`h-full bg-gradient-to-r ${gradientClass}`}
            />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h4 className="flex text-2xl text-primary font-medium items-center gap-1">
              <FaEthereum /> {received} Ether
            </h4>
            <p className="text-secondary text-sm">Raised of {total} Ethers</p>
          </div>
          <p
            onClick={handleAuthor}
            className="border border-solid border-[#e3e3e3] rounded-md px-2 py-1 text-sm text-gray-400 hover:bg-gray-200"
          >
            {formatAddr(author)}
          </p>
        </div>
      </div>
    </div>
  );
}
