import React, { useContext, useState } from "react";

const WalletContext = React.createContext();

export const WALLET_STATES = {
  SELECT_WALLET: 0,
  MINT: 1,
};

export default function WalletContextProvider(props) {
  const walletState = useState(WALLET_STATES.SELECT_WALLET);

  return (
    <WalletContext.Provider
      value={walletState}
      {...props}
    ></WalletContext.Provider>
  );
}

export function useWalletState() {
  return useContext(WalletContext);
}
