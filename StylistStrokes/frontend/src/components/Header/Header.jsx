import React, { useState, useRef, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from "reactstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logoss.png";
import "../Home/font.css";
import "@fontsource/galada";
import "./Header.css";

const navLinks = [
  { path: "/home", display: "🏠︎Home" },
  { path: "/about", display: "🖳 About" },
  { path: "/learn", display: "✐ Learn" },
  { path: "/gallery", display: "🕮 Gallery" },
  { path: "/contact", display: "☏ Contact" },
];

const Header = () => {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (location.pathname === "/login" || location.pathname === "/register") {
        headerRef.current.classList.remove("sticky__header");
        return;
      }

      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); 
  return (
    <header className="header grad-header" ref={headerRef}>
      <Navbar expand="lg" className="container">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand me-auto">
            <img src={logo} alt="" style={{ filter: "invert(100%)" }} className="logo-img" />
          </Link>
        </div>

        {/* Navbar Toggler */}
        <NavbarToggler style={{ filter: "invert(0%)" }} onClick={toggle} className="mobile__menu" />
        {/* Collapsible Menu */}
        <Collapse isOpen={isOpen} navbar>
          <div className="d-flex w-100 justify-content-between align-items-center">
            {/* Centered Menu Items */}
            <Nav className="menu d-flex justify-content-center align-items-center gap-4 mx-auto" navbar>
              {navLinks.map((item, index) => (
                <NavItem key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? "nav-header active__link" : "nav-header")}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.display}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>

            {/* Right-aligned Buttons */}
            <div className="nav__btns d-flex flex-column flex-lg-row gap-5">
              <Link to="/login">
                <Button className="btn-header1 w-lg-auto">
                  <label className="aclonica-regular">Register</label>
                </Button>
              </Link>
              <Link to="/register">
                <Button className="btn-header galada-regular w-lg-auto">
                  <label className="aclonica-regular">Log in</label>
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
