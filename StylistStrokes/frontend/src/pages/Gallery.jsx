import React, {useRef} from "react";
import { motion, useInView } from "framer-motion";
import { Container, Row, Col } from 'reactstrap';
import "../styles/gallery_page.css"
import "../styles/font.css"
import introArt from "../assets/images/gallery-intro.jpeg"
import highArt from "../assets/images/painting.jpg"
import GalleryDisplay from "../components/Gallery_page/g_page_display";
import HighlightDisplay from "../components/Gallery_page/highlight_display";
import VideoPage from "./Videopage";

const Gallery = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return <>
        <div
            style={{
                backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2JhY2tncm91bmRqb2IxNzE5LWJhY2tncm91bmQtMDIuanBn.jpg)`,
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
                        <Row className="justify-content-center align-items-center mb-4">
                            <Col lg="11">
                                <div className="page_intro">

                                    <div className="text-center ">
                                        <h1 className="galada-regular mb-4" style={{fontSize:"3.2rem"}}>Our collection of profesional artworks</h1>
                                        <h1 className="lead fst-italic">From brush to chisel, from canvas to parchment — our gallery showcases timeless expressions of human creativity.<br/>
                                        Discover calligraphy, paintings, and artifacts that reflect the soul of cultures across the globe.</h1>
                                    </div>

                                </div>
                            </Col>


                        </Row>
                        <Row className="justify-content-center align-items-center pb-4">
                            <Col lg="11" className="justify-content-center align-items-center">
                                <img className="img-fluid w-100 img_frame" src={highArt}></img>
                            </Col>
                        </Row>
                        <Row className="justify-content-center align-items-center mt-4">
                            <Col lg="11" className="text-center">
                                <h1 className="galada-regular">Step closer — let us introduce you to our featured masterpieces.</h1>
                            </Col>
                        </Row>
                        
                    </motion.div>

                    </motion.div>
                </Container>
            </section>
            {/* Highlights */}
            <section>
                
                    <div className="container-fluid p-0">
                        <Row className="justify-content-center text-center pb-4">
                            <motion.h1
                             ref={ref}
                             initial={{ opacity: 0,y:50 }}
                             animate={isInView ? { opacity: 1,y:0 } : {}}
                             transition={{ duration: 0.8}}
                             style={{fontSize:"5.6rem"}} className="mea-culpa-regular">Highlights</motion.h1>
                        </Row>
                        <Row className="justify-content-center text-center pb-4">
                            <motion.p
                            ref={ref}
                            initial={{ opacity: 0,y:50 }}
                            animate={isInView ? { opacity: 1,y:0 } : {}}
                            transition={{ duration: 0.8}}
                            className="lead fst-italic">A glimpse into the world’s artistic heritage, captured in pieces that transcend borders and time.</motion.p>
                        </Row>
                        <motion.div
                        ref={ref}
                        initial={{ opacity: 0,y:50 }}
                        animate={isInView ? { opacity: 1,y:0 } : {}}
                        transition={{ duration: 0.8}}
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
                            <h1 style={{fontSize:"5.6rem"}} className="mea-culpa-regular">Our Collection</h1>
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