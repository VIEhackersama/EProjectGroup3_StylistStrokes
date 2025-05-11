import React from "react";
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import experienceImg from '../assets/images/experience.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SeachBar";
import ServiceList from "../services/ServiceList";
import FeaturedCaligraphyList from "../components/Featured-caligraphy/FeaturedCaligraphyList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import Abouthero from "../components/About/abouthero";
const Home = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   return <>
      <div style={{
         backgroundImage: "url(https://img.freepik.com/free-photo/paperboard-texture_95678-72.jpg?semt=ais_hybrid&w=740)",

      }}>
         <Abouthero></Abouthero>
         {/* ========hero section start========= */}
         <section>
            <Container>
               <Row>
                  <Col lg='6' >
                     <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -80 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="hero__content">
                        <div className="hero__subtitle d-flex align-items-center">
                           <Subtitle subtitle={"The art of the soul in ink"} />
                           <img src={worldImg} alt="" />
                        </div>
                        <h1>
                           StylistStrokes: Calligraphy connects hearts beyond borders – where ink speaks a universal language.{" "}
                           {/* <span className="highlight">memories</span> */}
                        </h1>
                        <p>
                           Calligraphy is a respected art form in many countries. China, Japan, and Korea are known for traditional brush calligraphy. In the West, Latin calligraphy has developed with elegance and precision, often used in invitations, artistic documents, and decoration.
                        </p>
                     </motion.div>
                  </Col>

                  <Col lg='2'>
                     <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: -50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="hero__img-box">
                        <img src={heroImg} alt="" />
                     </motion.div>
                  </Col>
                  <Col lg='2'>
                     <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: -50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="hero__img-box mt-4">
                        <video src={heroVideo} alt="" controls />
                     </motion.div>
                  </Col>
                  <Col lg='2'>
                     <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: -50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="hero__img-box mt-5">
                        <img src={heroImg02} alt="" />
                     </motion.div>
                  </Col>
               <Col lg='12' className="mt-5">
               <Subtitle subtitle={"Who that have inspired us!"} />
                     <h2 className="featured__caligraphy-title">Discover legendary calligraphers who shaped the beauty of script.</h2>

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
            <Container className="p-5 rounded border" style={{ backgroundColor: "#f5ede4" }}>
               <Row>
                  <Col lg='6'>
                     <div className="experience__content">
                        <Subtitle subtitle={"Experience"} />

                        <h3>
                           With our all expreience <br /> we will serve you
                        </h3>
                        <p>
                           Over the past 2 weeks, we’ve dedicated ourselves to preserving the timeless art of traditional calligraphy. Our passion is reflected in every stroke, and our commitment is recognized by thousands of admirers. Whether you're seeking elegance, meaning, or cultural depth, our work speaks for itself.
                           <br />
                           Quas aliquam, hic tempore inventore suscipit unde.
                        </p>
                     </div>
                     <div className="counter__wrapper d-flex align-items-center gap-5">
                        <div className="counter__box">
                           <span>500+</span>
                           <h6>Web traffic view per day</h6>
                        </div>
                        <div className="counter__box">
                           <span>900+</span>
                           <h6>Regular users</h6>
                        </div>
                        <div className="counter__box">
                           <span>2+</span>
                           <h6>Weeks experience</h6>
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
                     <Subtitle subtitle={'Album'} />
                     <h2 className="gallery__title">
                        Visit our customers tour gallery
                     </h2>
                  </Col>
                  <Col lg='12' >
                  </Col>
                  <MasonryImagesGallery />
               </Row>
            </Container>
         </section>
         {/* ========= gallery section start ========== */}
         {/* ========= testimonial section start ========= */}
         <section>
            <Container>
               <Row>
                  <Col lg='12'>
                     <Subtitle subtitle={'Feedback'} />
                     <h2 className="testimonial__title">What our users say about StylistStrokes</h2>
                  </Col>
                  <Col lg='12'>
                     <Testimonials />
                  </Col>
               </Row>
            </Container>
         </section>
         {/* ========= testimonial section start ========= */}
         <Newsletter /></div>
   </>
};

export default Home;