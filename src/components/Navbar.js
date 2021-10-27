import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ cartItems }) => {
  return (
    <>
      <navbar>
        <div className="header-info">
          <h1>
            <Link to="/" className="logo">
              Simple Shop
            </Link>
          </h1>
        </div>
        <div className="header-route">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/cart">
                <i class="fa fa-shopping-cart">
                  <span className="cart-item-count">
                    {cartItems.length === 0 ? "" : cartItems.length}
                  </span>
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </navbar>
    </>
  );
};

export default Navbar;
