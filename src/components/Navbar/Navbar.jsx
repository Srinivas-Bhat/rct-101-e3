import React, { useContext } from "react";
import {Link, useNavigate} from 'react-router-dom'
import Login from "../../pages/Login";
import { AuthContext } from "../../context/AuthContext";


// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {

  const navigate = useNavigate();
  const {isAuth, login, logout} = useContext(AuthContext);

  const handleClick = () => {
    if(isAuth) {
      logout();
    }
    else {
      navigate('/products');
    }
  }

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to=''>Logo</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}Cart: </span>
      <button data-cy="navbar-login-logout-button" onClick={handleClick}>{isAuth ? "logout" : "login"}</button>
      <Login/>
    </div>
  );
};

export default Navbar;
