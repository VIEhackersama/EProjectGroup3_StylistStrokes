import React from "react";

import Header from './../Header/Header';
import Routers from '../../router/Routers';
import Footer from './../Footer/Footer';
import VideoPage from "../../pages/Videopage";
export default function Layout () {
  return ( 
    <>
      <Header/>
      <Routers/>
      <VideoPage/>
      <Footer></Footer>
    </>
  );
};

