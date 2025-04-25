import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "../styles/gallery_page.css"
import "../styles/font.css"
import introArt from "../assets/images/gallery-art3.jpg"
import introArt2 from "../assets/images/gallery-art2.jpg"

import GalleryDisplay from "../components/Gallery_page/g_page_display";
import HighlightDisplay from "../components/Gallery_page/highlight_display";

const Gallery = () => {
  return <>
    <section>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="page_intro">
                        <h1 className="intro1 tangerine-regular fw-medium">Welcome to the </h1>
                        <h1 className="intro2 mea-culpa-regular fw-semibold">Gallery</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab labore libero illum odit, amet incidunt quae deleniti explicabo obcaecati impedit saepe earum veritatis officia minus dignissimos nemo soluta cum nesciunt.</p>
                    </div>
                </Col>
                
                <Col lg="3">
                    <img className="intro-img img-fluid" src={introArt}></img>
                </Col>
                <Col lg="3">
                    <img className="intro-img img-fluid" src={introArt2}></img>
                </Col>
            </Row>
        </Container>
    </section>
    {/* Highlights */}
    <section>
        <div className="container">
            <Row className="justify-content-center text-center pb-4"> 
                <h1>Highlights</h1>
            </Row>
            <Row className="justify-content-center text-center pb-4"> 
                <p>These are some of the best artworks from our collection</p>
            </Row>
            <HighlightDisplay></HighlightDisplay>
        </div>
    </section>
    {/* Collection */}
    <section>
        <div className="container">
            <div>
                <Row className="justify-content-center text-center pb-4">
                    <h1 className="fw-bold fst-italic">Our Collection</h1>
                </Row>
            </div>
            <GalleryDisplay></GalleryDisplay>
        </div>
            
    </section>
  
  </>
};

export default Gallery;