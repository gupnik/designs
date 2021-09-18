import { Container, Button } from "react-bootstrap";
import MintPopup from "../mint-popup/MintPopup";
import style from "./MintBar.module.css";

export default function MintBar() {
  return (
    <Container fluid className={`${style.mint_bar} pb-3 pt-4`}>
      <Container
        className="text-center
			"
      >
        <MintPopup variant="yellow" className="mb-3">
          Connect your wallet first
        </MintPopup>
        <div className={style.subtitle}>
          <div>
            <b>Mint Price:</b> 1 SOL
          </div>
          <div>
            <small>
              <i>32 mints remaining</i>
            </small>
          </div>
        </div>
      </Container>
    </Container>
  );
}
