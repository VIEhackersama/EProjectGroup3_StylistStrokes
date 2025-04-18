import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "../styles/gallery_page.css"
import "../styles/font.css"
import introArt from "../assets/images/gallery-art3.jpg"
import introArt2 from "../assets/images/gallery-art2.jpg"

const Gallery = () => {
  return <>
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
                <img className="intro-img" src={introArt}></img>
            </Col>
            <Col lg="3">
                <img className="intro-img" src={introArt2}></img>
            </Col>
            
        </Row>
    </Container>
  
  </>
};

export default Gallery;