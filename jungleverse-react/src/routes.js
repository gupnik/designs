import { useState, useEffect, useMemo } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./pages";
import IndexPageV2 from "./pages/v2";
import { clusterApiUrl } from "@solana/web3.js";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";

const network = "devnet";

export default function Routes() {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
            <HashRouter>
              <Switch>
                <Route path="/v1">
                  <IndexPage></IndexPage>
                </Route>
                <Route exact path="/">
                  <IndexPageV2></IndexPageV2>
                </Route>
              </Switch>
            </HashRouter>
          </WalletDialogProvider>
        </WalletProvider>
    </ConnectionProvider>
  );
}
