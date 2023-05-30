import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

const NavBar = (props) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const history = useHistory();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    history.replace("/login");
  };

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
              <Nav.Link href="/">HOME</Nav.Link>
              {isLoggedIn && <Nav.Link href="/store">STORE</Nav.Link>}

              <Nav.Link href="/about">ABOUT</Nav.Link>
              {!isLoggedIn && <Nav.Link href="/login">LOGIN</Nav.Link>}
              {isLoggedIn && (
                <Nav.Link onClick={logoutHandler}>LOGOUT</Nav.Link>
              )}
              <Nav.Link href="/contactUs">Contact Us</Nav.Link>
              {isLoggedIn && (
                <Button variant="secondary" onClick={props.onShowCart}>
                  CART <sup>({props.products.length})</sup>
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
