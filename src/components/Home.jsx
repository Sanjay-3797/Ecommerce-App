import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Button
        variant="info"
        className="mt-2"
        style={{
          borderRadius: "200px",
          backgroundColor: "white",
          color: "lightblue",
          fontSize: "20px",
        }}
      >
        ►
      </Button>
      <h1 style={{ textAlign: "center" }}>TOURS</h1>
      <ListGroup style={{ textAlign: "center" }}>
        <ListGroupItem>
          JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE{" "}
          <Button variant="info">BUY TICKETS</Button>
        </ListGroupItem>
        <ListGroupItem>
          AUG23 DETROIT, MI DTE ENERGY MUSIC THEATRE{" "}
          <Button variant="info">BUY TICKETS</Button>
        </ListGroupItem>
        <ListGroupItem>
          SEP16 DETROIT, MI DTE ENERGY MUSIC THEATRE{" "}
          <Button variant="info">BUY TICKETS</Button>
        </ListGroupItem>
        <ListGroupItem>
          NOV08 DETROIT, MI DTE ENERGY MUSIC THEATRE{" "}
          <Button variant="info">BUY TICKETS</Button>
        </ListGroupItem>
        <ListGroupItem>
          JAN30 DETROIT, MI DTE ENERGY MUSIC THEATRE{" "}
          <Button variant="info">BUY TICKETS</Button>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Home;
