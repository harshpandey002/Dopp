import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContractProvider from "../context/contractContext";
import "../styles/globals.css";

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
