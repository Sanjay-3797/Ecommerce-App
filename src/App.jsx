import React, { useCallback, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AvailableProducts from "./components/AvailableProducts";
import CartModal from "./components/CartModal";
import About from "./components/About";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import axios from "axios";
import { useSelector } from "react-redux";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [showCart, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const url = `https://crudcrud.com/api/95fa79934b6e46fab8df1f437234b7d9/${localStorage.getItem("email")}`;

  const getEmail = (email) => {
    let updatedEmail = "";
    for (const letter of email) {
      if (letter === "@" || letter === ".") {
      } else {
        updatedEmail = updatedEmail + letter;
      }
    }
    localStorage.setItem("email", updatedEmail);
    setEmail(localStorage.getItem("email"));
  };

  const fetchCartItemHandler = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    fetchCartItemHandler();
  }, [fetchCartItemHandler]);

  const addToCartHandler = async (productData) => {
    try {
      const response = await axios.post(url, productData);
      setProductData((prevData) => {
        if (prevData.includes(productData)) {
          alert("This item is already added to Cart");
          return prevData;
        }
        return [...prevData, productData];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCartHandler = async (id) => {
    try {
      setProductData((prevData) => {
        const updatedCartData = prevData.filter((item) => item._id !== id);
        return updatedCartData;
      });
      const response = await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
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
          <Login email={getEmail} />
        </Route>
        {isLoggedIn && (
          <Route path="/store">
            <AvailableProducts onAddToCart={addToCartHandler} />
          </Route>
        )}
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
