import { Col, Container, Row } from "react-bootstrap";
import SelectWalletButton from "../btn-select-wallet/SelectWalletButton";
import style from "./HeaderV2.module.css";

export default function HeaderV2() {
  return (
    <div className={style.container}>
      <Container>
        <Row className={`${style.row} align-items-center py-5 py-md-4 mx-0`}>
          <Col className="text-center mb-4">
            <h1
              className="mb-5"
              style={{ fontWeight: 300, letterSpacing: "5px" }}
            >
              Mint a{" "}
              <img
                style={{ height: "3rem" }}
                alt="Junglee"
                src="Junglee.svg"
              ></img>
              !
            </h1>
            <SelectWalletButton></SelectWalletButton>
          </Col>
          <Col className={style.img_col} xs={12} md={4}>
            <img
              alt="characters"
              className="w-100"
              src="./characters.gif"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
