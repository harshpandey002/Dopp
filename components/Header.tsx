import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { ConnectWallet } from "@thirdweb-dev/react";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>Dopp – Donation Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-between py-4 px-8">
        <h2 className="text-3xl text-primary font-semibold">Dopp</h2>
        <ul className="text-l font-medium text-primary align-center  gap-8 hidden md:flex">
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

        <div>
          <ConnectWallet accentColor="#343434" />
        </div>
      </div>
    </>
  );
}
