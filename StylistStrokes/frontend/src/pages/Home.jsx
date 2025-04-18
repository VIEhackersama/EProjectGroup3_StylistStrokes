import React from "react";
import '../styles/home.css';
import '../styles/font.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";

import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SeachBar";
import ServiceList from "../services/ServiceList";
import FeaturedCalligraphyList from "../components/Featured-calligraphy/FeaturedCalligraphyList";

import AboutMiddle from '../components/Home/aboutmiddle';
import AboutTitle from '../components/Home/abouttitle';
import ShopHeader from "../components/Home/shop_header";
import ShopList from "../components/Home/shop_display";
import GalleryHeader from "../components/Home/gallery_header";
import GalleryList from "../components/Home/gallery_display";

const Home = () => {
  return (
    <div>
      {/* ======== Hero Section ========= */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus culpa cumque laudantium voluptatum vitae...
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

      {/* ======== Service Section ========= */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ======== Featured Calligraphy Section ========= */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__calligraphy-title">Our featured calligraphy works</h2>
            </Col>
            <FeaturedCalligraphyList />
          </Row>
        </Container>
      </section>

      {/* ======== Shop Section ========= */}
      <section className='bg-white'>
        <div className="container">
          <ShopHeader />
          <ShopList />
        </div>
      </section>

      {/* ======== Gallery Section ========= */}
      <section>
        <div className="container">
          <GalleryHeader />
          <GalleryList />
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
    </div>
  );
}
export default Home;
