import React, { useState } from "react";
import NavBar from "./components/NavBar";
import AvailableProducts from "./components/AvailableProducts";
import CartModal from "./components/CartModal";
import About from "./components/About";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [showCart, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCartHandler = (productData) => {
    setProductData((prevData) => {
      if (prevData.includes(productData)) {
        alert("This item is already added to Cart");
        return prevData;
      }
      return [...prevData, productData];
    });
  };

  const removeFromCartHandler = (title) => {
    setProductData((prevData) => {
      const updatedCartData = prevData.filter((item) => item.title !== title);
      return updatedCartData;
    });
  };

  return (
    <React.Fragment>
      {showCart && (
        <CartModal
          show={showCart}
          onHandleClose={handleClose}
          products={productData}
          onRemove={removeFromCartHandler}
        />
      )}
      <NavBar onShowCart={handleShow} products={productData} />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/store">
          <AvailableProducts onAddToCart={addToCartHandler} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contactUs">
          <ContactUs />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
