import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Head from "next/head";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Header() {
  const address = useAddress();

  return (
    <>
      <Head>
        <title>Dopp – Donation Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-between py-4 px-8">
        <h2 className="text-3xl text-primary font-semibold">Dopp</h2>
        <ul className="text-l font-medium text-primary align-center gap-4 flex md:hidden">
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
            className="text-neutral-600 cursor-pointer hover:text-blue-900"
          >
            <FaLinkedinIn className="text-2xl" />
          </li>
        </ul>
        <ul className="text-l font-medium text-primary align-center gap-8 hidden md:flex">
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
            className="flex items-center gap-1 text-neutral-600 cursor-pointer hover:text-blue-900"
          >
            LinkedIn <BiLinkExternal className="text-sm" />
          </li>
        </ul>
        {address && (
          <div className="hidden md:flex">
            <ConnectWallet accentColor="#2a2a2a" />
          </div>
        )}
      </div>
    </>
  );
}
