import React from "react";
import Logo from "../public/images/Chefinitly.jpg";

import "./Nav.css";




const Nav = () => (
  <nav>
    <div classname="nav-wrapper">
      <a href="/" img={Logo}></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="sass.html">Sign up</a>
        </li>
        <li>
          <a href="badges.html">Log In</a>
        </li>
        <li>
          <a href="collapsible.html">About Us</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
