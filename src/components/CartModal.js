import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
          <Modal.Body key={item.title}>
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
                <input
                  type="number"
                  value={item.quantity}
                  style={{ width: "31px" }}
                />
                <Button
                  variant="danger"
                  onClick={() => {
                    props.onRemove(item.title);
                  }}
                >
                  REMOVE
                </Button>
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
