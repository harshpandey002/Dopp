import { MediaRenderer, useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { BiLinkExternal } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";

export default function CampaignCard({ data = {}, onClick, disabled }: any) {
  const { image, name, description, url, totalAmount, amountReceived } = data;

  const address = useAddress();

  const received = Number(ethers.utils.formatEther(amountReceived.toString()));

  const total = Number(ethers.utils.formatEther(totalAmount.toString()));

  const width = disabled ? "100%" : Math.floor((received / total) * 100) + "%";

  const containerClass = disabled ? "" : "hover:border-gray-500 cursor-pointer";

  const gradientClass = disabled
    ? " from-[#cebf36] to-[#96DD7D]"
    : "from-[#cebf36] to-[#96DD7D]";

  let src = image.replace("ipfs://", "https://ipfs.io/ipfs/");

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
        <div className="flex items-center justify-between">
          <div>
            <h4 className="flex text-2xl text-primary font-medium items-center gap-1">
              <FaEthereum /> {received} Ether
            </h4>
            <p className="text-secondary text-sm">Raised of {total} Ethers</p>
          </div>
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
            <img
              src={`https://avatars.dicebear.com/api/bottts/${address}.svg`}
              alt="owner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
