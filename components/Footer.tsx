import React from "react";
import { BiLinkExternal } from "react-icons/bi";

export default function Footer() {
  return (
    <ul className="text-l font-medium text-primary align-center justify-center gap-8 flex py-6 px-4 border-t border-gray-300 ">
      <li
        onClick={() => open("https://twitter.com/harshpandey002")}
        className="flex items-center gap-1 text-neutral-600 cursor-pointer hover:text-blue-900"
      >
        Twitter <BiLinkExternal className="text-sm" />
      </li>
      <li
        onClick={() => open("https://www.instagram.com/harshpandey_002/")}
        className="flex items-center gap-1 text-neutral-600 cursor-pointer hover:text-blue-900"
      >
        Instagram <BiLinkExternal className="text-sm" />
      </li>
      <li
        onClick={() => open("https://github.com/harshpandey002/dopp")}
        className="flex items-center gap-1 text-neutral-600 cursor-pointer hover:text-blue-900"
      >
        Github <BiLinkExternal className="text-sm" />
      </li>
      <li
        onClick={() => open("https://www.linkedin.com/in/harshpandey002")}
        className="flex items-center gap-1 text-neutral-600 cursor-pointer hover:text-blue-900"
      >
        LinkedIn <BiLinkExternal className="text-sm" />
      </li>
    </ul>
  );
}
