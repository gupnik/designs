import { Button, Col, Container, Row } from "react-bootstrap";
import style from "./Header.module.css";

export default function Header() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={3}>
          <img className={style.header_gif} src="./characters.gif"></img>
        </Col>
        <Col className="">
          <img src="./Jungleverse.svg" style={{ height: "3rem" }}></img>

          <div>
            <p className="mb-5">
              Mint your own unique NFT from our limited collecton now!
            </p>

            <Button variant="secondary">Read More</Button>
          </div>
        </Col>
      </Row>
      <hr className="jungleverse-hr my-5"></hr>
    </Container>
  );
}
