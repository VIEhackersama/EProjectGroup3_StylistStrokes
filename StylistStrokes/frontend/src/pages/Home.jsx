import React from "react";
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import Subtitle from "./../shared/Subtitle";
import AboutMiddle from '../components/Home/aboutmiddle'
import AboutTitle from '../components/Home/abouttitle'
import '../styles/font.css'
import SearchBar from "../shared/SeachBar";
import ShopHeader from "../components/Home/shop_header";
import ShopList from "../components/Home/shop_display";
import GalleryHeader from "../components/Home/gallery_header";
import GalleryList from "../components/Home/gallery_display";

const Home = () => {
   return <>

      {/* ========hero section start========= */}
      <section>
         <Container>
            <Row>
               <Col lg='6' >
                  <div className="hero__content">
                     <div className="hero__subtitle d-flex align-items-center">
                        <Subtitle subtitle={"Calligraphy is the art of the soul in ink"} />
                        <img src={worldImg} alt="" />
                     </div>
                     <h1>
                        Calligraphy connects hearts beyond borders – where ink speaks a universal language.{" "}
                        <span className="highlight">memories</span>
                     </h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus culpa cumque laudantium voluptatum vitae. Laborum sint doloribus ex repellendus odit quidem perferendis amet perspiciatis cumque magnam, numquam maxime dolore. Facilis!
                     </p>
                  </div>
               </Col>

               <Col lg='2'>
                  <div className="hero__img-box">
                     <img src={heroImg} alt="" />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box mt-4">
                     <video src={heroVideo} alt="" controls />
                  </div>
               </Col>
               <Col lg='2'>
                  <div className="hero__img-box mt-5">
                     <img src={heroImg02} alt="" />
                  </div>
               </Col>

               <SearchBar />
            </Row>
         </Container>
      </section>
      {/* ==========hero section start======== */}
      <section className="py-5 bg-white">
         <div className="container">
            <AboutTitle></AboutTitle>
            <div className="row align-items-center gy -4">
               <div className="col-md-6 order-md-2">
                  <div className="card border-0 shadow">
                     <img
                        className="card-img img-fluid rounded" height={42}
                        src={heroImg}
                        alt=""
                     />
                  </div>
               </div>
               <AboutMiddle></AboutMiddle>
            </div>
         </div>
      </section>
      {/* Shop section */}
      <section className="bg-white">
         <div className="container">
            <ShopHeader></ShopHeader>
            <ShopList></ShopList>
         </div>
      </section>
      {/* Gallery section */}
      <section bg-white>
         <div className="container">
            <GalleryHeader></GalleryHeader>
            <GalleryList></GalleryList>
         </div>
      </section>
   </>
};

export default Home;