import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pizza" id="order-pizza">Order Pizza</NavLink>
        </nav>
      </header>
    )
}

export default Header;