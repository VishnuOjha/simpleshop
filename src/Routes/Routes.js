import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Signup from "../components/Signup";
import Cart from "../components/cart/Cart";
import Payment from "../components/Payment";
import HeroPage  from "../components/HeroPage";

const Routes = ({
  products,
  cartItems,
  handleAddToCart,
  handleRemoveToCart,
  handleCartClearence
}) => {
  return (
    <>
      <Switch>
      <Route exact path="/">
        <HeroPage />
      </Route>
        <Route exact path="/products">
          <Home products={products} handleAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/cart">
          <Cart
            cartItems={cartItems}
            handleAddToCart={handleAddToCart}
            handleRemoveToCart={handleRemoveToCart}
            handleCartClearence={handleCartClearence}
          />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
