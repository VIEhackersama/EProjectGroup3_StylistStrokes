import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from 'reactstrap';
import "../styles/gallery_page.css"
import "../styles/font.css"
import introArt from "../assets/images/gallery_header.jpg"
import GalleryDisplay from "../components/Gallery_page/g_page_display";
import HighlightDisplay from "../components/Gallery_page/highlight_display";
import VideoPage from "./Videopage";

const Gallery = () => {
    return <>
        <div
            style={{ backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2JhY2tncm91bmRqb2IxNzE5LWJhY2tncm91bmQtMDIuanBn.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",       
                backgroundPosition: "center ",
             }}
        >
            <section>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Row>
                            <Col lg="6">
                                <div className="page_intro">
                                    <div className="d-flex flex-row">
                                        <h1 className="intro1 tangerine-regular fw-medium me-4">Welcome to the </h1>
                                        <p className="intro2 mea-culpa-regular fw-semibold">Gallery</p>
                                    </div>

                                    <div>
                                        <p>Our little, humble collection from around the world</p>
                                        <p className="lead">Welcome to a curated collection of artistic excellence. These works have been gathered from diverse corners of the world, each bearing the imprint of culture, emotion, and history. We invite you to experience the quiet grandeur of art that transcends time.</p>
                                    </div>

                                </div>
                            </Col>

                            <Col lg="6">
                                <img className="intro-img img-fluid" src={introArt}></img>
                            </Col>

                        </Row>
                        <VideoPage />
                    </motion.div>

                </Container>
            </section>
            {/* Highlights */}
            <section>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="container-fluid p-0">
                        <Row className="justify-content-center text-center pb-4">
                            <h1 className="mea-culpa-regular">Highlights</h1>
                        </Row>
                        <Row className="justify-content-center text-center pb-4">
                            <p>A selection of distinguished works that represent the finest pieces in our collection.</p>
                        </Row>
                        <HighlightDisplay></HighlightDisplay>
                    </div>
                </motion.div>

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
        </div>

    </>
};

export default Gallery;