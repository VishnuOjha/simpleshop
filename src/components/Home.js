import React from "react";
import "./home.css";

const Home = ({ products, handleAddToCart }) => {
  return (
    <>
      <div className="product_info"><h1>Mobiles</h1></div>
        
      <div className="container">
    
        {products.map((items) => (
          <div className="card">
            <div>
              <img
                className="product-image"
                src={items.image}
                alt="productimage"
              />
            </div>
            <div>
              <h1 className="product-name">{items.title}</h1>
            </div>
            <div>
              <h1 className="product-price">Price : {items.price}</h1>
            </div>
            <div>
              <button
                className="cartbtn"
                onClick={() => handleAddToCart(items)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
