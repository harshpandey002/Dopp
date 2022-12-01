import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import ContractProvider from "../context/contractContext";

function MyApp({ Component, pageProps }: AppProps) {
  const desiredChainId = ChainId.Goerli;

  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <ContractProvider>
        <Component {...pageProps} />
      </ContractProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
