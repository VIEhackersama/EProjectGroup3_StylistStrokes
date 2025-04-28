import React from "react";
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import experienceImg from '../assets/images/experience.png';

import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SeachBar";
import ServiceList from "../services/ServiceList";
import FeaturedCaligraphyList from "../components/Featured-caligraphy/FeaturedCaligraphyList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";

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
      <section>
         <Container>
            <Row>
               <Col lg='3'>
                  <h5 className="services__subtitle">What we serve</h5>
                  <h2 className="services__title">We offer our best sevicse</h2>
               </Col>
               <ServiceList />
            </Row>
         </Container>
      </section>
      {/* ========= featured caligraphy section start =========== */}
      <section>
         <Container>
            <Row>
               <Col lg='12' className="mb-5">
                  <Subtitle subtitle={"Explore"} />
                  <h2 className="featured__caligraphy-title">Our featured caligraphy works</h2>
               </Col>
               <FeaturedCaligraphyList />
            </Row>
         </Container>
      </section>
      {/* ========= featured caligraphy section end =========== */}


      {/* ========= experience section start ============= */}
      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={"Experience"} />

                     <h2>
                        with our all expreience <br /> we will serve you
                     </h2>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Quas aliquam, hic tempore inventore suscipit unde.
                     </p>
                  </div>
                  <div className="counter__wrapper d-flex align-items-center gap-5
               ">
                     <div className="counter__box">
                        <span>12k+</span>
                        <h6>calligraphy views</h6>
                     </div>
                     <div className="counter__box">
                        <span>2k+</span>
                        <h6>Regular clients</h6>
                     </div>
                     <div className="counter__box">
                        <span>15</span>
                        <h6>Years experience</h6>
                     </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <img src={experienceImg} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>

      {/* ========= experience section end ============= */}

   {/* ========= gallery section start ========== */}
    <section>
      <Container>
         <Row>
            <Col lg='12'>
                <Subtitle subtitle={'Gallery'}/>
                <h2 className="gallery__title">
                   Visit our customers tour gallery
                </h2>
            </Col>
            <Col lg='12' >
            </Col>
            <MasonryImagesGallery/>
         </Row>
      </Container>
    </section>
   {/* ========= gallery section start ========== */}
   {/* ========= testimonial section start ========= */}
   <section>
      <Container>
         <Row>
            <Col lg='12'>
               <Subtitle subtitle={'Fans Love'} />
               <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
                <Testimonials />
            </Col>
         </Row>
      </Container>
   </section>
   {/* ========= testimonial section start ========= */}
  </>
};

export default Home;