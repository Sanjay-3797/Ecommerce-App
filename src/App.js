import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AvailableProducts from "./components/AvailableProducts";
import CartModal from "./components/CartModal";

const App = () => {
  const [showCart, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      {showCart && <CartModal show={showCart} onHandleClose={handleClose} />}
      <NavBar onShowCart={handleShow} />
      <AvailableProducts />
    </React.Fragment>
  );
};

export default App;
