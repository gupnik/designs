import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

import style from "./SelectWalletButton.module.css";
import { useWalletState, WALLET_STATES } from "../../contexts/WalletContext";

import * as anchor from "@project-serum/anchor";
import { getCandyMachineState, mintOneToken } from "../../candy_machine/candy-machine";
import { useWallet } from "@solana/wallet-adapter-react";

import { useWalletDialog } from "@solana/wallet-adapter-material-ui";

const config = new anchor.web3.PublicKey("DCURcduJfrwwAVDNcXQ1fNJurhR67bHbBM45XGGdSTM9");

const candyMachineId = new anchor.web3.PublicKey("DshxNHJFUd3LRxovXWYRHcxKyAruQaVDFnjkqgVQKaRv");

const treasury = new anchor.web3.PublicKey("CeEmTCe16s7PzpCWB7u2BWJL96evhPFj5nT8E8VUkioQ");

const isMainnet = true;

const rpcHost = isMainnet ? `https://api.mainnet-beta.solana.com/` : `https://api.devnet.solana.com/`;
const connection = new anchor.web3.Connection(rpcHost);

export default function SelectWalletButton({ children }) {
  const wallet = useWallet();
  const walletDialog = useWalletDialog();

  const [candyMachine, setCandyMachine] = useState({});
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [state, setState] = useWalletState();
  const [mintModalShow, setMintModalShow] = useState(false);
  

  const handleMintClick = async () => {
    setMintModalShow(true);
    console.log("Mint called");
    if (wallet.connected) {
      console.log("Connected", wallet.connected, wallet.publicKey);
      try {
        let result = await mintOneToken(candyMachine, config, wallet.publicKey, treasury);
        console.log(result);
      } catch (error) {
        alert("You don't have enough SOL in your wallet to mint");
      } finally {
        setMintModalShow(false);
      }
    }
  }
  const handleMintModalHide = () => setMintModalShow(false);

  function handleSelectWalletClick() {
    walletDialog.setOpen(true);
    setState(WALLET_STATES.MINT);
  }

  useEffect(() => {
    (async () => {
      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      };

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          anchorWallet,
          candyMachineId,
          connection
        );
      // console.log(goLiveDate, itemsRemaining);
      setItemsRemaining(itemsRemaining);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, setCandyMachine, setItemsRemaining]);

  return (
    <>
      {!wallet.connected ? (
         <Button
         style={{ border: "3px solid black" }}
         className="px-4 py-2"
         variant="primary"
         onClick={handleSelectWalletClick}
       >
         Select Wallet
       </Button>
      ) : (
        <>
          <Modal
            show={mintModalShow}
            onHide={handleMintModalHide}
            contentClassName={style.mint_modal_content}
          >
            <Modal.Body className="py-5">
              <div className="text-center">
                <img
                  className="mb-3"
                  style={{ width: "15rem" }}
                  src="logo.png"
                  alt="logo"
                ></img>
                <h5>Generating your Junglee</h5>

                <img
                  alt="..."
                  style={{ width: "7rem" }}
                  src="https://media.giphy.com/media/v9lZy0d0A1rp3qg3ff/giphy.gif?cid=ecf05e47mx0sqbcu7xpjqri1fsrnz9aevdp85ncw7sxuczzs&amp;rid=giphy.gif&amp;ct=s"
                ></img>
              </div>
            </Modal.Body>
          </Modal>
          <Button
            variant="yellow"
            onClick={handleMintClick}
            style={{ border: "3px solid black" }}
            className="px-4 py-2"
          >
            Mint Now
          </Button>
        </>
      )}
    </>
  );
}
