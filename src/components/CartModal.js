import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CartModal = (props) => {
  let totalAmout = 0;
  for (const product of props.products) {
    totalAmout += product.quantity * product.price;
  }

  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={props.onHandleClose}
        style={{ fontWeight: "bold", border: "1px solid black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Cart <sup>{props.products.length}</sup>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ fontWeight: "bold", border: "1px solid black" }}>
            <Col>ITEM</Col>
            <Col>PRICE</Col>
            <Col>QUANTITY</Col>
          </Row>
        </Modal.Body>
        {props.products.map((item) => (
          <Modal.Body key={item._id}>
            <Row>
              <Col>
                <Image src={item.imageUrl} alt="" style={{ height: "50px" }} />
                <span>{item.title}</span>
              </Col>
              <Col>
                <span>$ {item.price}</span>
              </Col>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  height: "40px",
                }}
              >
                <span style={{ width: "31px", padding: "5px" }}>
                  x{item.quantity}
                </span>
                <Button
                  variant="danger"
                  onClick={() => {
                    props.onRemove(item._id);
                  }}
                >
                  REMOVE
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        ))}
        <span style={{ display: "flex", justifyContent: "end" }}>
          Total ${totalAmout}
        </span>
        <Modal.Footer>
          {totalAmout > 1000 && <Button variant="warning">Premium</Button>}
          <Button variant="secondary" onClick={props.onHandleClose}>
            Save Changes
          </Button>
          <Button
            variant="success"
            onClick={() => {
              props.onHandleClose(alert("Thanks for Shopping"));
            }}
          >
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CartModal;
