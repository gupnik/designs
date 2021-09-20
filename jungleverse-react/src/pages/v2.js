import HeaderV2 from "../components/header_v2/HeaderV2";
import MenuV2 from "../components/menu_v2/MenuV2";
import WalletContextProvider from "../contexts/WalletContext";

export default function IndexPageV2() {
  return (
    <div className="jungleverse-container">
      <WalletContextProvider>
        <MenuV2></MenuV2>
        <HeaderV2></HeaderV2>
      </WalletContextProvider>
    </div>
  );
}
