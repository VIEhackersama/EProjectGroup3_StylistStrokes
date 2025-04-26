import React, { useState } from "react";
import { Container, Row, Button, Collapse } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./Header.css";

const nav__links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/learn", display: "Learn" },
  { path: "/gallery", display: "Gallery" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header border">
      <Container>
        <Row>
          <div className="nav__weapper d-flex align-items-center justify-content-between">
            {/*========= logo ========= */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/*========= logo end ========= */}

            {/*========= menu start ========= */}
            <div className="navigation d-none d-lg-block">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/*========= menu end ========= */}

            <div className="nav-right d-flex align-items-center gap-4">
              <div className="nav__btns d-none d-lg-flex align-items-center gap-4">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              <span
                className="mobile__menu d-lg-none"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              >
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>

          {/* Mobile menu */}
          <Collapse isOpen={isOpen} navbar className="mobile__nav d-lg-none mt-3">
            <ul className="menu d-flex flex-column align-items-start gap-3">
              {nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "active__link" : ""
                    }
                    onClick={() => setIsOpen(false)} 
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
              <div className="nav__btns d-flex flex-column align-items-start gap-3 mt-3">
                <Button className="btn secondary__btn w-100">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn w-100">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </ul>
          </Collapse>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
