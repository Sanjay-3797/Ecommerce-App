import React from "react";
import { Button, Col } from "react-bootstrap";

const productsArray = [
  {
    title: "Colors",
    head: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    head: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    head: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    head: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProducts = () => {
  const product = productsArray.map((item) => (
    <div
      className="mt-5"
      style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}
    key={item.head}>
      <Col className="mt-2">{item.head}</Col>
      <Col>
        <img className="mt-2" src={item.imageUrl} alt="This is img" />
      </Col>
      <Col
        className="mt-4"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <span>₹ {item.price}</span>
        <Button variant="secondary">ADD TO CART</Button>
      </Col>
    </div>
  ));

  return <div>{product}</div>;
};

export default AvailableProducts;
