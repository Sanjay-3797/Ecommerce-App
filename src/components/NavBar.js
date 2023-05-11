import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{ fontSize: "50px" }} href="#home">
            The Generics
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#store">STORE</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Button variant="secondary" onClick={props.onShowCart}>
                CART <sup>{props.products.length}</sup>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
