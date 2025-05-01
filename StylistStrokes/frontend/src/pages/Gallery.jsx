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
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab labore libero illum odit, amet incidunt quae deleniti explicabo obcaecati impedit saepe earum veritatis officia minus dignissimos nemo soluta cum nesciunt.</p>
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
                            <p>These are some of the best artworks from our collection</p>
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