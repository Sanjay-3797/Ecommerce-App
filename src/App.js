import React, { useState } from "react";
import NavBar from "./components/NavBar";
import AvailableProducts from "./components/AvailableProducts";
import CartModal from "./components/CartModal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";

const router = createBrowserRouter([{ path: "/about", element: <About /> }]);

const App = () => {
  const [productData, setProductData] = useState([]);
  const [showCart, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCartHandler = (productData) => {
    setProductData((prevData) => {
      if (prevData.includes(productData)) {
        alert("This item is already added to the cart");
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
      <AvailableProducts onAddToCart={addToCartHandler} />
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;
