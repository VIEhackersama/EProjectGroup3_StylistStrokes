import React, { useState, useRef, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button, Label } from "reactstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaHouse, FaCircleInfo, FaPencil, FaBook, FaPhone, FaFacebookF, FaYoutube, FaMailchimp, FaVoicemail, FaLetterboxd, FaMessage } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import penBrush from "../../assets/images/caligraphy-img01.jpg";
import logo from "../../assets/images/logo1.png";
import strokeUnderline from "../../assets/images/stroke.png";
import "../About/font.css";
import "@fontsource/galada";
import "./Header.css";
import axios from 'axios'
const navLinks = [
  { path: "/gallery", display: <><FaBook></FaBook>GALLERY</> },
  { path: "/learn", display: <><FaPencil></FaPencil>LEARN</> },
  { path: "/showcase", display: <><RiTeamFill />SHOWCASE</> },
  { path: "/about", display: <><FaCircleInfo></FaCircleInfo>ABOUT US</> },
  { path: "/contact", display: <> <FaPhone />CONTACT</> },

];

const Header = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const [visitCount, setVisitCount] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    axios.get("http://localhost:8000/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error("Auth error:", err);
        setUser(null);
      });
  }, [location.pathname]);
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
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
  useEffect(() => {
    const storedCount = localStorage.getItem("visit_count");
    const newCount = storedCount ? parseInt(storedCount) + 1 : 5001;
    localStorage.setItem("visit_count", newCount);
    setVisitCount(newCount);
  }, []);
  return (
    <div>
      <div style={{ borderWidth: "10px", backgroundColor: "#f5a68c", color: "brown" ,borderColor:"brown"}} className="top-bar py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaMessage className="me-2" />
            <span>Email: styliststrokes@customercare.com</span>
          </div>
          <div className="social-links">
            <label>Visited count: {visitCount}</label>
          </div>
        </div>
      </div>
      <header className="header grad-header shadow" ref={headerRef}>
        <Navbar expand="lg" className="container">
          <div className="d-flex align-items-center">
            <Link to="/" className="navbar-brand me-auto">
              <img src={logo} alt="" style={{ filter: "invert(00%)" }} className="logo-img" />
            </Link>
          </div>

          <NavbarToggler style={{ filter: "invert(0%)" }} onClick={toggle} className="mobile__menu" />
          <Collapse isOpen={isOpen} navbar>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <Nav className="menu d-flex justify-content-center align-items-center gap-4 mx-auto" navbar>
                {navLinks.map((item, index) => (
                  <NavItem key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? "nav-header active__link tagesschrift-regular" : "nav-header tagesschrift-regular"
                      }
                      style={{
                        "--strokeimg": `url(${strokeUnderline})`
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.display}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
              <div className="nav__btns d-flex flex-column flex-lg-row gap-5 align-items-center">
                {user ? (
                  <>
                    <div className="text-center text-black fw-semibold aclonica-regular">
                      Hello, {user.name}
                    </div>
                    <Link to="/login" className="">
                      <div style={{ "--brush-image": `url(${penBrush})`, }} className="btn-header2 btn-with-image text-center">
                        <label className="fw-semibold aclonica-regular text-black">Log out</label>
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="">
                      <div style={{
                        "--brush-image": `url(${penBrush})`,
                      }} className="btn-header2 btn-with-image text-center w-100">
                        <label className="fw-semibold aclonica-regular text-black">Login</label>
                      </div>
                    </Link>
                    <Link to="/register" className="">
                      <div style={{ "--brush-image": `url(${penBrush})`, }} className="btn-header2 btn-with-image text-center w-100">
                        <label className="fw-semibold aclonica-regular text-black">Register</label>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </Collapse>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
