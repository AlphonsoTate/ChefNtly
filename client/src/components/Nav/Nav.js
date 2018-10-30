import React from "react";
import { Navbar, NavItem } from "react-materialize";
import ImportedImage from "/Users/alphonsotate/Desktop/Classwork/ChefNtly/client/src/images/Logo(transparent).PNG";
import "./Nav.css";

var Img = <img alt="ime" class="logo" src={ImportedImage} />;

export default () => (
  <Navbar  brand={Img} className="grey darken-2 appbar" left>
    <NavItem onClick={() => console.log("test click")}>Login</NavItem>
    <NavItem href="/becomechef">Become a Chef</NavItem>
    <NavItem href="/becomechef">Create Account</NavItem>
  </Navbar>
);
