import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Head from "next/head";
import Campaigns from "../components/Campaigns";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="font-poppins bg-[#F3EEE6] flex min-h-screen flex-col ">
      <Head>
        <title>Dopp – Donation Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-between py-4 px-8">
        <h2 className="text-3xl text-primary font-semibold">Dopp</h2>
        <ul className="text-l font-medium text-primary align-center flex gap-8">
          <li className="cursor-pointer	">Some</li>
          <li className="cursor-pointer	">Dummy</li>
          <li className="cursor-pointer	">Links</li>
          <li className="cursor-pointer	">Here</li>
        </ul>
        <div>
          <ConnectWallet accentColor="#343434" />
        </div>
      </div>

      <Hero />

      <Campaigns />
    </div>
  );
};

export default Home;
