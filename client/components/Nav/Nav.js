import React from "react";
import Logo from "../public/images/logo.jpg"

import "./Nav.css";

const Nav = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" class="brand-logo">
        {Logo}
      </a>
    </div>
  </nav>
);

export default Nav;
