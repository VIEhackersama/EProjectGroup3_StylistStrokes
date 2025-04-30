import React, { useState, useRef, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from "reactstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaHouse, FaCircleInfo, FaPencil, FaBook, FaPhone } from "react-icons/fa6";
import penBrush from "../../assets/images/caligraphy-img01.jpg";
import logo from "../../assets/images/logoss.png";
import "../Home/font.css";
import "@fontsource/galada";
import "./Header.css";

const navLinks = [
  {path: "/home", display:<> <FaHouse /> HOME</>},
  {path: "/about", display: <><FaCircleInfo />ABOUT US</> },
  { path: "/learn", display: <><FaPencil></FaPencil>LEARN</> },
  { path: "/gallery", display: <><FaBook></FaBook>GALLERY</> },
  { path: "/contact", display: <><FaPhone></FaPhone>CONTACT</> },
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
    <header className="header grad-header shadow" ref={headerRef}>
      <Navbar expand="lg" className="container">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand me-auto">
            <img src={logo} alt="" style={{ filter: "invert(00%)" }} className="logo-img" />
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
                    className={({ isActive }) =>
                      isActive ? "nav-header active__link tagesschrift-regular" : "nav-header tagesschrift-regular"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.display}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>

            {/* Right-aligned Buttons */}
            <div className="nav__btns d-flex flex-column flex-lg-row gap-3 align-items-center">
              <Link to="/login" className="w-100">
                <div
                  className="btn-header2 btn-with-image text-center w-100"
                  style={{
                    "--brush-image": `url(${penBrush})`,
                  }}
                >
                  <label className="fw-semibold aclonica-regular text-black">Login</label>
                </div>
              </Link>
              <Link to="/register" className="w-100">
                <div
                  className="btn-header2 btn-with-image text-center w-100"
                  style={{
                    "--brush-image": `url(${penBrush})`,
                  }}
                >
                  <label className="fw-semibold aclonica-regular text-black">Register</label>
                </div>
              </Link>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
