import React,{useRef} from "react";
import { motion, useInView } from "framer-motion";
import { Container, Row, Col } from 'reactstrap';
import "../styles/gallery_page.css"
import "../styles/font.css"
import introArt from "../assets/images/gallery-intro.jpeg"
import GalleryDisplay from "../components/Gallery_page/g_page_display";
import HighlightDisplay from "../components/Gallery_page/highlight_display";
import VideoPage from "./Videopage";

const Gallery = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return <>
        <div
            style={{ backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2JhY2tncm91bmRqb2IxNzE5LWJhY2tncm91bmQtMDIuanBn.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",       
                backgroundPosition: "center ",
             }}
        >
            
                <div className="position-relative container-fluid d-flex flex-column justify-content-center align-items-center">
                    <div className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundImage:`url(${introArt})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex:1,
                        filter: "brightness(65%)",
                    }}
                    >
                    </div>
                    <div className="position-relative text-center my-3" style={{ zIndex: 2 }}>
                        <h1 className="intro1 mea-culpa-regular fw-medium text-white my-4">Welcome to the Gallery</h1>
                    </div>
                </div>
            
            <section>
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Row className="justify-content-center align-items-center">
                            <Col lg="11">
                                <div className="page_intro m-5">
                                    <div className="text-center ">
                                        <h1 className="galada-regular mb-4 fst-italic" style={{fontSize:"4rem"}}>Our collection of profesional artworks</h1>
                                        <h1 className="lead fst-italic">Welcome to a curated collection of artistic excellence. These works have been gathered from diverse corners of the world, each bearing the imprint of culture, emotion, and history. We invite you to experience the quiet grandeur of art that transcends time.</h1>
                                    </div>

                                </div>
                            </Col>


                        </Row>
                        
                    </motion.div>
                </Container>
            </section>
            {/* Highlights */}
            <section>
                
                <div className="container-fluid p-0 mx-2">
                    <Row className="justify-content-center text-center pb-4">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 80 }}
                            animate={isInView ? { opacity: 1, y: 0 }:{}}
                            transition={{ duration: 0.8 }}
                        >
                            
                            <h1 style={{fontSize:"5.6rem"}} className="mea-culpa-regular mb-3">Highlights</h1>
                            <p className="lead fst-italic">A selection of distinguished works that represent the finest pieces in our collection.</p>
                            
                        </motion.div>
                        
                    </Row>
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 80 }}
                            animate={isInView ? { opacity: 1, y: 0 }:{}}
                            transition={{ duration: 0.8 }}
                        >
                            <HighlightDisplay></HighlightDisplay>
                        </motion.div>
                </div>
                

            </section>
            {/* Collection */}
            <section>
                <div className="container">
                    <div>
                        <Row className="justify-content-center text-center pb-4">
                            <h1 style={{fontSize:"5.6rem"}} className="mea-culpa-regular">The Collection</h1>
                        </Row>
                    </div>
                    <GalleryDisplay></GalleryDisplay>
                </div>

            </section>
            <VideoPage />
        </div>

    </>
};

export default Gallery;