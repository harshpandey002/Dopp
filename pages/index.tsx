import type { NextPage } from "next";
import Campaigns from "../components/Campaigns";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="font-poppins bg-[#F3EEE6] flex min-h-screen flex-col ">
      <Header />

      <Hero />

      <Campaigns />
    </div>
  );
};

export default Home;
