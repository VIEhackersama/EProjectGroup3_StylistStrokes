import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logoss.png";
import '../Home/font.css'
import '@fontsource/galada';
import "./Header.css";
const navLinks = [
  { path: "/home", display: "🏠︎Home" },
  { path: "/about", display: "🖳 About" },
  { path: "/learn", display: "✐ Learn" },
  { path: "/gallery", display: "🕮 Gallery" },
  { path: "/contact", display: "☏ Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="header grad-header">
      <Navbar expand="lg" className="container">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand me-auto">
            <img src={logo} alt="Logo" style={{ filter: "invert(100%)" }} className="logo-img" />
          </Link>
        </div>

        {/* Navbar Toggler */}
        <NavbarToggler style={{ filter: "invert(100%)" }} onClick={toggle} className="mobile__menu" />

        {/* Collapsible Menu */}
        <Collapse isOpen={isOpen} navbar >
          <div className="d-flex w-100 justify-content-between align-items-center">
            {/* Centered Menu Items */}
            <Nav className="menu d-flex justify-content-center align-items-center gap-4 mx-auto" navbar>
              {navLinks.map((item, index) => (
                <NavItem key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? " nav-header active__link" : "nav-header")}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.display}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>

            {/* Right-aligned Buttons */}
            <div className="nav__btns d-flex flex-column flex-lg-row gap-5 ">
              <Link to="/login">
                <Button className="btn-header1 w-lg-auto">
                  <label className="aclonica-regular">Register</label>
                </Button>
              </Link>
              <Link to="/register">
                <Button className="btn-header galada-regular  w-lg-auto">
                  <label className="aclonica-regular">Log in  </label>
                </Button>
              </Link>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;