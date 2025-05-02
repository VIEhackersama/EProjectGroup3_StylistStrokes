import AboutMiddle from "../components/About/aboutmiddle";
import AboutTitle from "../components/About/abouttitle";
import Aboutcrew from "../components/About/aboutcrew";
import { motion } from "framer-motion";
import { BsPeopleFill } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaPaperPlane, FaHeart } from "react-icons/fa";
import MasonryImagesGallery from "../components/About/MasonryImagesGallery";
import { Col, Container, Row } from "reactstrap";
import YoutubeEmbed from "../components/youtube";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram, SlSocialFacebook, SlSocialReddit } from "react-icons/sl";
export default function AboutPage() {
    return (
        <div style={{ backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2JhY2tncm91bmRqb2IxNzE5LWJhY2tncm91bmQtMDIuanBn.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",       
            backgroundPosition: "center ",
         }}
        // style={{ backgroundColor: "#e8d4ca
        // style={{ backgroundImage:"url(https://img.freepik.com/free-photo/canvas-background-with-paint-texture_91008-505.jpg?semt=ais_hybrid&w=740)"}}
        >
            <img
                src="https://greatpeopleinside.com/wp-content/uploads/2019/11/team-building-1030x579.jpg"
                className="img-fluid pt-3 justify-content-center d-block shadow mx-auto"
                style={{ width: "100%", height: "400px", borderRadius: "10px", objectFit: "cover" }}
            ></img> 
            <motion.div className="container pt-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
            <AboutTitle desc={'StylistStrokes: The Beauty of legacy and technology interwined'} title={'Our Mission'}></AboutTitle>
                <div className="row justify-content-center h1 mb-5"><FaPaperPlane></FaPaperPlane></div>
            </motion.div>
            <motion.div className="container py-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
                <AboutMiddle></AboutMiddle>
            </motion.div>
            <div className="container pt-5">
                <AboutTitle desc={"We aren't just somebody who merely have interest in calligraphy. We also are the desire of people"} title={'Our team'}></AboutTitle>
                <div className="row justify-content-center h1 mb-5"><BsPeopleFill></BsPeopleFill></div>
                <Aboutcrew></Aboutcrew>
            </div>
            <div className="container pt-5">
                <AboutTitle desc={"We see. We do. We connect. We maintain tradition. And we leave nobody behind!"} title={'Our legacy'}></AboutTitle>
                <div className="row justify-content-center h1 mb-5"><FaHandshakeSimple></FaHandshakeSimple></div>
                <section>
                    <Container>
                        <Row>
                            <Col lg='12' >
                            </Col>
                            <MasonryImagesGallery />
                        </Row>
                    </Container>
                </section>
            </div>
            <div className="container pt-5">
                <AboutTitle desc={"Never gonna give you up. Never gonna let you down. Never gonna go around and dessert you"} title={'Join Us Now'}></AboutTitle>
                <div className="row justify-content-center h1 mb-5">
                    <FaHeart></FaHeart>
                    <div className="btn btn-info my-4 px-5">
                        <YoutubeEmbed url="https://www.youtube.com/embed/07ePW--MQY4"></YoutubeEmbed>
                    </div>

                </div>
            </div>
            <div className="container pt-5" style={{backgroundColor:""}}>
                <AboutTitle desc={""} title={'Connect to our social media'}></AboutTitle>
                <div className="row justify-content-center align-items-center py-4 m-5">
                    <div className="d-flex gap-3 justify-content-center social-icons1">
                        <a href="https://facebook.com" className="text-white me-3"><FaXTwitter size={60} /></a>
                        <a href="https://youtube.com" className="text-white me-3"><SlSocialInstagram size={60} /></a>
                        <a href="https://instagram.com" className="text-white me-3"><SlSocialFacebook size={60} /></a>
                        <a href="https://instagram.com" className="text-white me-3"><SlSocialReddit size={60} /></a>
                    </div>
                </div>
            </div>

        </div>
    );
}