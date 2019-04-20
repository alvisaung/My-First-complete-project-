import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Styled";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-secondary px-sm-4">
      <Link to="/">
        <img className="navbar-brand " src={logo} alt="store" />
      </Link>
      <ul className="navbar-nav align-items-center ">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link navTitle">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/Cart" className="ml-auto">
        <ButtonContainer>
          <span>
            <i className="fas fa-cart-plus" />
          </span>
          My Cart
        </ButtonContainer>
      </Link>
    </nav>
  );
};
export default Navbar;
