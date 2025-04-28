import React,{useRef, useEffect} from "react";
import { Container, Row,Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import "./Header.css";

const nav__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path: '/learn',
    display: 'Learn'
  },
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]
// =======
// import React, { useState } from "react";
// import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from "reactstrap";
// import { NavLink, Link } from "react-router-dom";
// import logo from "../../assets/images/logoss.png";
// import '../Home/font.css'
// import '@fontsource/galada';
// import "./Header.css";
// const navLinks = [
//   { path: "/home", display: "🏠︎Home" },
//   { path: "/about", display: "🖳 About" },
//   { path: "/learn", display: "✐ Learn" },
//   { path: "/gallery", display: "🕮 Gallery" },
//   { path: "/contact", display: "☏ Contact" },
// ];
// >>>>>>> main

const Header = () => {
  
  const headerRef = useRef(null)
  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }


  useEffect(()=>{
    stickyHeaderFunc()

    return window.removeEventListener('scroll',stickyHeaderFunc)
  })

  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__weapper d-flex align-items-center justify-content-between">
           
           {/*========= logo ========= */}
            <div className="logo">
              <img src={logo} alt=""/>
            </div>
           {/*========= logo end ========= */}

           {/*========= menu start ========= */}
           <div className="navigation">
             <ul className="menu d-flex align-items-center gap-5">
               { 
                nav__links.map((item,index)=>(
                  <li className="nav__item" key={index}>
                     <NavLink to={item.path}className={navClass=> 
                      navClass.isActive ? "active__link" : ""
                      } 
                    >
                      {item.display}</NavLink>
                  </li>
                ))
               }
             </ul>
           </div>
           {/*========= menu end ========= */}
           <div className="nav-right d-flex align-items-center gap-4 " >
            <div className="nav__btns d-flex align-items-center gap-4 "> 
                  <Button className="btn secondary__btn"> 
                     <Link to='/login'> 
                        Login
                     </Link>
                  </Button>
                  <Button className="btn primary__btn">
                     <Link to='/register'>
                        Register
                     </Link>  
                  </Button>
            </div>

            <span className="mobile__menu">
            <i class="ri-menu-line"></i>
            </span>
           </div>
        </div>
      </Row>
    </Container>
  </header>
// =======
//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <header className="header grad-header">
//       <Navbar expand="lg" className="container">
//         {/* Logo */}
//         <div className="d-flex align-items-center">
//           <Link to="/" className="navbar-brand me-auto">
//             <img src={logo} alt="Logo" style={{ filter: "invert(100%)" }} className="logo-img" />
//           </Link>
//         </div>

//         {/* Navbar Toggler */}
//         <NavbarToggler style={{ filter: "invert(100%)" }} onClick={toggle} className="mobile__menu" />

//         {/* Collapsible Menu */}
//         <Collapse isOpen={isOpen} navbar >
//           <div className="d-flex w-100 justify-content-between align-items-center">
//             {/* Centered Menu Items */}
//             <Nav className="menu d-flex justify-content-center align-items-center gap-4 mx-auto" navbar>
//               {navLinks.map((item, index) => (
//                 <NavItem key={index}>
//                   <NavLink
//                     to={item.path}
//                     className={({ isActive }) => (isActive ? " nav-header active__link" : "nav-header")}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.display}
//                   </NavLink>
//                 </NavItem>
//               ))}
//             </Nav>

//             {/* Right-aligned Buttons */}
//             <div className="nav__btns d-flex flex-column flex-lg-row gap-5 ">
//               <Link to="/login">
//                 <Button className="btn-header1 w-lg-auto">
//                   <label className="aclonica-regular">Register</label>
//                 </Button>
//               </Link>
//               <Link to="/register">
//                 <Button className="btn-header galada-regular  w-lg-auto">
//                   <label className="aclonica-regular">Log in  </label>
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </Collapse>
//       </Navbar>
//     </header>
//   );
// >>>>>>> main
};

export default Header;