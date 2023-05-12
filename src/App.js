import React, { useState } from "react";
import NavBar from "./components/NavBar";
import AvailableProducts from "./components/AvailableProducts";
import CartModal from "./components/CartModal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [showCart, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCartHandler = (productData) => {
    setProductData((prevData) => {
      if (prevData.includes(productData)) {
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AvailableProducts onAddToCart={addToCartHandler} />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

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
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;
