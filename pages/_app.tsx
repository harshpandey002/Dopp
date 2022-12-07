import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import ContractProvider from "../context/contractContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  const desiredChainId = ChainId.Goerli;

  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <ContractProvider>
        <Component {...pageProps} />
        <ToastContainer
          theme="dark"
          position="bottom-center"
          autoClose={1500}
        />
      </ContractProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
