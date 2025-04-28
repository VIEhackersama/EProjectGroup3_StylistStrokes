import React from "react";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from './../pages/Home';
import Caligraphy from './../pages/Caligraphy';
import CaligraphyDeltails from './../pages/CaligraphyDetails';
import Login from './../pages/LoginAuth';
import Register from './../pages/RegisterAuth';
import SeachResutlist from './../pages/SearchResultList';
import Gallery from "../pages/Gallery";
import Videolist from "../components/videolist";
import LearnPage from "../pages/LearnPage";
import AboutPage from "../pages/About";
import GalleryDetails from "../pages/GalleryDetail";
import ContactUs from "../pages/ContactUs";
import VietnamCalligraphy from "../pages/VNcaligraphy";
import KoreanCalligraphy from "../pages/KoreanCaligraphy";
import ArabicCalligraphy from "../pages/ArabicCalligraphy";
import ChinaCalligraphy from "../pages/ChinaCalligraphy";
import JapanCalligraphy from "../pages/JapanCalligraphy";
import WesternCalligraphy from "../pages/WesternCalligraphy";

import { AnimatePresence } from "framer-motion";

const Routers = () => {
  const location = useLocation(); // <== thêm dòng này để lấy location

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/caligraphy" element={<Caligraphy />} />
        <Route path="/caligraphy/:id" element={<CaligraphyDeltails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/caligraphy/search" element={<SeachResutlist />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/gallery/:id" element={<GalleryDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/videos" element={<Videolist />} />

        {/* Các trang riêng cho từng loại calligraphy */}
        <Route path="/vietnam-calligraphy" element={<VietnamCalligraphy />} />
        <Route path="/korean-calligraphy" element={<KoreanCalligraphy />} />
        <Route path="/arabic-calligraphy" element={<ArabicCalligraphy />} />
        <Route path="/china-calligraphy" element={<ChinaCalligraphy />} />
        <Route path="/japan-calligraphy" element={<JapanCalligraphy />} />
        <Route path="/western-calligraphy" element={<WesternCalligraphy />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;
