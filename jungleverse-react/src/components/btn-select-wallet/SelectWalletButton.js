import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

import style from "./SelectWalletButton.module.css";
import { useWalletState, WALLET_STATES } from "../../contexts/WalletContext";

export default function SelectWalletButton({ children }) {
  const [state, setState] = useWalletState();
  const [mintModalShow, setMintModalShow] = useState(false);

  const handleMintClick = () => setMintModalShow(true);
  const handleMintModalHide = () => setMintModalShow(false);

  function handleSelectWalletClick() {
    setState(WALLET_STATES.MINT);
  }

  return (
    <>
      {state === WALLET_STATES.SELECT_WALLET ? (
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
