import { BiLinkExternal } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";

export default function CampaignCard() {
  return (
    <div className="flex flex-col p-4 border border-gray-300 hover:border-gray-500 cursor-pointer border-solid rounded-xl gap-4">
      <div className="aspect-w-2 aspect-h-1 w-full bg-gray-300 rounded-lg"></div>
      <div className="flex-[6] flex flex-col gap-4">
        <div>
          <h4 className="line-clamp-1 text-2xl font-medium text-primary">
            Charity Miles
          </h4>
          <span className="flex items-center gap-1 text-blue-800 ">
            <a className="cursor-pointer hover:underline ">
              harshkumarpandey.com
            </a>
            <BiLinkExternal className="text-sm" />
          </span>
        </div>
        <div>
          <p className="text-sm text-secondary line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            veniam reiciendis libero maiores illo vel placeat veritatis qui.
            Doloremque pariatur, illo mollitia ad nihil dolorem quam perferendis
            ea velit eos?
          </p>

          <div className="h-[28px] mt-3 overflow-hidden rounded-[4px] bg-neutral-200 ">
            <div className="h-full w-1/2 bg-gradient-to-r from-[#cebf36] to-[#96DD7D]" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="flex text-2xl text-primary font-medium items-center gap-1">
              <FaEthereum /> 20 Ether
            </h4>
            <p className="text-secondary text-sm">Raised of 10 Ethers </p>
          </div>
          <div className="w-[44px] h-[44px] rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
