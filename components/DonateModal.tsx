import { BiLinkExternal } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { inputStyles } from "./CreateCampaignModal";
import { ModalHeader } from "./ModalHeader";

export default function DonateModal({ show, onClose }: any) {
  if (!show) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed w-full h-full bg-gray-900/[.6] backdrop-blur-sm z-10"
      />
      <div
        className={`w-11/12 max-w-[460px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-20`}
      >
        <ModalHeader title="Donate Funds" onClose={onClose} />

        <div
          id="hideScroll"
          className="flex flex-1 flex-col max-h-[70vh] overflow-auto p-4 pb-0 border-t border-gray-300 border-solid  gap-4"
        >
          <div className="aspect-w-2 aspect-h-1 w-full bg-gray-300 rounded-lg overflow-hidden">
            <img className="object-cover" src="" alt="dummy" />
          </div>
          <div className="flex-[6] flex flex-col gap-4">
            <div>
              <h4 className="line-clamp-1 text-2xl font-medium text-primary">
                Campaign Name
              </h4>
              <span className="flex items-center gap-1 text-blue-800 ">
                <a className="cursor-pointer hover:underline ">xyz.com</a>
                <BiLinkExternal className="text-sm" />
              </span>
            </div>
            <p className="text-sm text-secondary ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              numquam ipsa dolorem earum, ipsum recusandae fuga! Eligendi id
              voluptates, sequi molestiae quo ad similique tempore
              exercitationem maiores ducimus illo a recusandae assumenda! Dolor
              neque a laborum nesciunt voluptates fuga doloremque quia itaque
              assumenda, iusto autem reiciendis incidunt libero soluta? Ratione!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              numquam ipsa dolorem earum, ipsum recusandae fuga! Eligendi id
              voluptates, sequi molestiae quo ad similique tempore
              exercitationem maiores ducimus illo a recusandae assumenda! Dolor
              neque a laborum nesciunt voluptates fuga doloremque quia itaque
              assumenda, iusto autem reiciendis incidunt libero soluta? Ratione!
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="flex text-2xl text-primary font-medium items-center gap-1">
                  <FaEthereum /> 0 Ether
                </h4>
                <p className="text-secondary text-sm">Raised of 20 Ethers </p>
              </div>
              <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
                <img
                  src={`https://avatars.dicebear.com/api/bottts/.svg`}
                  alt="owner"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 sticky bottom-0 bg-white py-4">
              <input
                className={inputStyles}
                type="amount"
                placeholder="Enter Amount"
              />
              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={onClose}
                  className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-primary rounded-md"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#1D8399] hover:bg-[#13697C] text-white rounded-md"
                >
                  Create Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
