import React, { useCallback, useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AvailableProducts from "./components/AvailableProducts";
import CartModal from "./components/CartModal";
import About from "./components/About";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import AuthContext from "./components/store/auth-context";
import axios from "axios";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [showCart, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const authCtx = useContext(AuthContext);

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
      const response = await axios.get(
        `https://crudcrud.com/api/9846fd0645864bd59b50825ea6392e8c/${localStorage.getItem(
          "email"
        )}`
      );
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCartItemHandler();
  }, [fetchCartItemHandler]);

  const addToCartHandler = async (productData) => {
    try {
      const response = await axios.post(
        `https://crudcrud.com/api/9846fd0645864bd59b50825ea6392e8c/${localStorage.getItem(
          "email"
        )}`,
        productData
      );
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
      const response = await axios.delete(
        `https://crudcrud.com/api/9846fd0645864bd59b50825ea6392e8c/${localStorage.getItem(
          "email"
        )}/${id}`
      );
      // setProductData((prevData) => {
      //   const updatedCartData = prevData.filter((item) => item._id !== id);
      //   return updatedCartData;
      // });
    } catch (error) {
      console.log(error);
    }
    setProductData((prevData) => {
      const updatedCartData = prevData.filter((item) => item._id !== id);
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
          <Login email={getEmail} />
        </Route>
        {authCtx.isLoggedIn && (
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
