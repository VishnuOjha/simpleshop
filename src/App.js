import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Data from "./Data/data";
import Routes from "./Routes/Routes";

const App = () => {
  // fetching Data from Data.js
  const { products } = Data;

  // creating cartitems and usestate
  const [cartItems, setCartItems] = useState([]);

  // function for removing items from cart
  const handleRemoveToCart = (product) => {
    // checking if item is already added or not
    const ProductExits = cartItems.find((item) => item.id === product.id);

    // if item is added in cart and checking quantity
    if (ProductExits.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      // decreasing cart item by 1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExits, quantity: ProductExits.quantity - 1 }
            : item
        )
      );
    }
  };

  // function to add data in cart
  const handleAddToCart = (product) => {
    // checking if item is already added or not
    const ProductExits = cartItems.find((item) => item.id === product.id);
    // if product is added in cart
    if (ProductExits) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...ProductExits,
                quantity: ProductExits.quantity + 1
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // for removing all cart Items
  const handleCartClearence = () => {
    setCartItems([]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes
          products={products}
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemoveToCart={handleRemoveToCart}
          handleCartClearence={handleCartClearence}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
