import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const CartModal = (props) => {
  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHandleClose}
        style={{ fontWeight: "bold", border: "1px solid black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Cart <sup>{0}</sup>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ fontWeight: "bold", border: "1px solid black" }}>
            <Col>ITEM</Col>
            <Col>PRICE</Col>
            <Col>QUANTITY</Col>
          </Row>
        </Modal.Body>
        {cartElements.map((item) => (
          <Modal.Body>
            <Row>
              <Col>
                <Image src={item.imageUrl} alt="" style={{ height: "50px" }} />
                <span>{item.title}</span>
              </Col>
              <Col>
                <span>$ {item.price}</span>
              </Col>
              <Col style={{ display: "flex", justifyContent:"space-evenly", height:"40px"}}>
                <input
                  type="number"
                  value={item.quantity}
                  style={{ width: "31px" }}
                />
                <Button variant="danger">REMOVE</Button>
              </Col>
            </Row>
          </Modal.Body>
        ))}
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHandleClose}>
            Close
          </Button>
          <Button variant="success" onClick={props.onHandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CartModal;
