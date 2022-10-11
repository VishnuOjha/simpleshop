import React from "react";
import "./css/heropage.css";
import MobilePng from "../images/mobile.svg"
import samsung from "../images/samsung.jpg"
import oneplus9 from "../images/oneplus9.jpg"
import google from "../images/google.png"
import iphone11 from "../images/iPhone11.jpg"
import oppo from "../images/Oppo.jpg"

const HeroPage = () => {
  return (
    <>
      <div className="heropage">
        <div className="heropage-content">
          <div className="hero-left">
            <p className="info-1">
              Welcome to the <span>Simple Shop</span>
            </p>
            <p className="info-2">Here you will Find the Best Mobile Phones </p>
          </div>
          <div className="hero-right">
            <img src={MobilePng} alt="mobileimage" />
          </div>
        </div>
        <div className="products">
          <h1 className="product-info">Available Products</h1>
          <div className="product-container">
            <div className="cards">
              <div className="card-image">
                <img className="product-image" src={samsung} alt="" />
              </div>
              <div className="card-title">
                <p>Samsung</p>
              </div>
            </div>
            <div className="cards">
              <div className="card-image">
                <img className="product-image" src={iphone11} alt="" />
              </div>
              <div className="card-title">
                <p>IPhone</p>
              </div>
            </div>
            <div className="cards">
              <div className="card-image">
                <img className="product-image" src={google} alt="" />
              </div>
              <div className="card-title">
                <p>Google</p>
              </div>
            </div>
            <div className="cards">
              <div className="card-image">
                <img className="product-image" src={oneplus9} alt="" />
              </div>
              <div className="card-title">
                <p>One Plus</p>
              </div>
            </div>
            <div className="cards">
              <div className="card-image">
                <img className="product-image" src={oppo} alt="" />
              </div>
              <div className="card-title">
                <p>Oppo</p>
              </div>
            </div>
          </div>
        </div>
        <footer>
            <div className="footer">
                <div className="footer-left">
                <p className="footer-shop-name">Simple Shop</p>
                <p className="footer-shop-desc">Best Mobile Phone seller in the Market,
                Provide Newely lanched Products,
                Provide Good customer Service.</p>
                </div>
                <div className="footer-right">
                <h3>Contact Us</h3>
                <div className="contact-container">
                    <label className="lable">Email</label>
                    <input type="email" name="" id="" />
                    <label className="lable">Message</label>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                    <button>Send Message</button>
                </div>
                </div>
            </div>
        </footer>
      </div>
    </>
  );
};

export default HeroPage;
