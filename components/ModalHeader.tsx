import { AiOutlineClose } from "react-icons/ai";

export function ModalHeader({ title, onClose }: any) {
  return (
    <div className="flex items-center justify-between p-4 mb-4 border-solid border-gray-300 border-b">
      <h3 className="text-xl font-medium">{title}</h3>
      <span
        onClick={onClose}
        className="w-[24] h-[24] rounded-full group hover:bg-neutral-100 p-1 cursor-pointer "
      >
        <AiOutlineClose className="text-neutral-500 group-hover:text-neutral-800" />
      </span>
    </div>
  );
}
