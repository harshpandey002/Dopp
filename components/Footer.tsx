import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <ul className="text-l font-medium text-primary align-center gap-6 flex md:hidden items-center justify-center py-6 px-4 border-t border-gray-300">
        <li
          onClick={() => open("https://twitter.com/harshpandey002")}
          className="text-neutral-600 cursor-pointer hover:text-[#00acae]"
        >
          <FaTwitter className="text-2xl" />
        </li>
        <li
          onClick={() => open("https://www.instagram.com/harshpandey_002/")}
          className="text-neutral-600 cursor-pointer hover:text-[#bc2a8d]"
        >
          <AiFillInstagram className="text-2xl" />
        </li>
        <li
          onClick={() => open("https://github.com/harshpandey002/dopp")}
          className="text-neutral-600 cursor-pointer hover:text-black"
        >
          <AiFillGithub className="text-2xl" />
        </li>
        <li
          onClick={() => open("https://www.linkedin.com/in/harshpandey002")}
          className="text-neutral-600 cursor-pointer hover:text-[#0A66C2]"
        >
          <FaLinkedinIn className="text-2xl" />
        </li>
      </ul>
      <ul className="text-l font-medium text-primary align-center justify-center gap-8 hidden md:flex py-6 px-4 border-t border-gray-300 ">
        <li
          onClick={() => open("https://twitter.com/harshpandey002")}
          className="flex items-center gap-1 text-neutral-600 cursor-pointer hover:text-[#00acae]"
        >
          Twitter <BiLinkExternal className="text-sm" />
        </li>
        <li
          onClick={() => open("https://www.instagram.com/harshpandey_002/")}
          className="flex items-center gap-1 text-neutral-600 cursor-pointer hover:text-[#bc2a8d]"
        >
          Instagram <BiLinkExternal className="text-sm" />
        </li>
        <li
          onClick={() => open("https://github.com/harshpandey002/dopp")}
          className="flex items-center gap-1 text-neutral-600 cursor-pointer hover:text-black"
        >
          Github <BiLinkExternal className="text-sm" />
        </li>
        <li
          onClick={() => open("https://www.linkedin.com/in/harshpandey002")}
          className="flex items-center gap-1 text-neutral-600 cursor-pointer hover:text-[#0A66C2]"
        >
          LinkedIn <BiLinkExternal className="text-sm" />
        </li>
      </ul>
    </>
  );
}
