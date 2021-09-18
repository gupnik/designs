import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import style from "./MintPopup.module.css";

export default function MintPopup({
  basePrice = 0.05,
  minQuantity = 1,
  maxQuantity = 20,
  startQuantity = 1,
  ...props
}) {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(basePrice);
  const [quantity, setQuantity] = useState(startQuantity);

  useEffect(() => {
    setAmount(quantity * basePrice);
  }, [quantity]);

  function onButtonClick() {
    setShow(true);
  }

  function onModalHide() {
    setShow(false);
  }

  function addQuantity() {
    if (quantity + 1 <= maxQuantity) setQuantity(quantity + 1);
  }

  function minusQuantity() {
    if (quantity - 1 >= minQuantity) setQuantity(quantity - 1);
  }

  return (
    <>
      <Button onClick={onButtonClick} {...props}></Button>
      <Modal
        show={show}
        onHide={onModalHide}
        contentClassName={style.mint_popup}
        dialogClassName={style.mint_popup_dialog}
        size="sm"
        centered
      >
        <Modal.Header className="p-0" closeButton></Modal.Header>
        <Modal.Body>
          <div className={`${style.mint_amount} px-4 py-5`}>
            <img
              className={`${style.amount_icon} me-2`}
              src="./icon-adopt.svg"
            />
            <div>{amount.toFixed(2)}</div>
          </div>

          <div className={`${style.quantity_container} py-4 mt-3`}>
            <div>
              <Button onClick={minusQuantity} className="quantity-button">
                -
              </Button>
            </div>
            <div className="px-3">
              <div
                className="text-uppercase"
                style={{ fontSize: "0.7rem", letterSpacing: "2px" }}
              >
                Quantity
              </div>
              <div className="text-center">
                <h5>{quantity}</h5>
              </div>
            </div>

            <div>
              <Button onClick={addQuantity} className="quantity-button">
                +
              </Button>
            </div>
          </div>

          <div></div>
        </Modal.Body>

        <Modal.Footer style={{ borderTop: "none", display: "block" }}>
          <Button variant="yellow" className="w-100 m-0" onClick={onModalHide}>
            Confirm
          </Button>
          <div className="text-center">
            <small>xxx Remaining</small>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
