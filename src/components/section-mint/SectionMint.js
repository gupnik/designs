import { Col, Container, Row, Button } from "react-bootstrap";

export default function SectionMint() {
  return (
    <Container className="pb-5">
      <Row className="align-items-center">
        <Col className="pe-5">
          <img
            className="mb-4"
            src="./MintIt.svg"
            style={{ height: "2rem" }}
          ></img>
          <p className="mb-0">
            <b
              className="d-inline-block me-2 fst-italic"
              style={{ fontSize: "0.8rem" }}
            >
              Select Wallet Candy machine address:
            </b>
            <span style={{ fontFamily: "monospace" }}>
              J9nrzzkWwmV3XgpowjDZKnCXrCCfwavq2m6vpQdkc3Pj
            </span>
          </p>
          <p className="mb-3">
            <b
              className="d-inline-block me-2 fst-italic"
              style={{ fontSize: "0.8rem" }}
            >
              Network:
            </b>
            <span style={{ fontFamily: "monospace" }}>
              devnet <a href="#">https://api.devnet.solana.com/</a>
            </span>
          </p>
          <p className="mb-0">
            <b
              className="d-inline-block me-2 fst-italic"
              style={{ fontSize: "0.8rem" }}
            >
              Go live date:
            </b>
            <span style={{ fontFamily: "monospace" }}>
              9/8/2021, 8:09:50 AM
            </span>
          </p>

          <p className="mb-0">
            <b
              className="d-inline-block me-2 fst-italic"
              style={{ fontSize: "0.8rem" }}
            >
              Countdown:
            </b>
            <span style={{ fontFamily: "monospace" }}>
              Minting started already!
            </span>
          </p>
        </Col>
        <Col xs="auto" className="ps-5">
          <Button variant="primary" className="px-4">
            Select Wallet
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
