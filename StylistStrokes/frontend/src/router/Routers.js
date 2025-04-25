import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Caligraphy from './../pages/Caligraphy';
import CaligraphyDeltails from './../pages/CaligraphyDetails';
import Login from './../pages/LoginAuth';
import Register from './../pages/RegisterAuth';
import SeachResutlist from './../pages/SearchResultList';
import Gallery from "../pages/Gallery";
import VideoPage from "../pages/Videopage";
import LearnPage from "../pages/LearnPage";
import AboutPage from "../pages/About";

const Routers  = () => {
  return (
     <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/caligraphy' element={<Caligraphy/>}/>
          <Route path='/caligraphy/:id' element={<CaligraphyDeltails/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/caligraphy/search' element={<SeachResutlist/>}/>
          <Route path='/gallery' element={<Gallery></Gallery>}/>
          <Route path='/about' element={<AboutPage></AboutPage>}/>
          <Route path='/learn' element={<LearnPage/>}/>
     </Routes>
  )
};

export default Routers ;