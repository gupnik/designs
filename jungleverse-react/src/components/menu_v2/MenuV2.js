import style from "./MenuV2.module.css";
import SelectWalletButton from "../btn-select-wallet/SelectWalletButton";
import { useWalletState, WALLET_STATES } from "../../contexts/WalletContext";

export default function MenuV2() {
  const [walletState] = useWalletState();

  return (
    <div
      className={`${style.menu} py-2 px-5 d-flex justify-content-between align-items-center`}
      style={{
        backgroundColor:
          walletState == WALLET_STATES.MINT ? "#555bb9" : "#ffda00",
      }}
    >
      <img style={{ width: "6rem" }} src="logo.png"></img>

      <SelectWalletButton></SelectWalletButton>
    </div>
  );
}
