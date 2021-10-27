import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  handleAddToCart,
  handleRemoveToCart,
  handleCartClearence
}) => {
  // calculating total price
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price * 1.25,
    0
  );

  // console.log(totalPrice);
  return (
    <>
      <div className="cart-items">
        <div className="cart-header">Cart</div>
        <div className="clear-cart">
          {cartItems.length >= 1 && (
            <button className="clear-cart-btn" onClick={handleCartClearence}>
              Clear Cart
            </button>
          )}
        </div>
        {cartItems.length === 0 && (
          <div className="cart-empty">Cart is Empty</div>
        )}
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-list">
              <img
                className="cart-item-image"
                src={item.image}
                alt="productImage"
              />
              <div className="cart-item-name">{item.title}</div>
              <div className="cart-item-functions">
                <button
                  className="add-item-to-cart"
                  onClick={() => handleAddToCart(item)}
                >
                  +
                </button>
                <button
                  className="remove-item-to-cart"
                  onClick={() => handleRemoveToCart(item)}
                >
                  -
                </button>
              </div>
              <div className="cart-item-price">
                {item.quantity} * {item.price}
              </div>
            </div>
          ))}
        </div>
        <div className="cart-item-total-price">
          <div>
            <button className="payment-btn">
              <Link to="/payment">Paynow </Link>
            </button>
          </div>
          Total Price :                      <div>{totalPrice}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
