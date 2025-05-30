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
    <div style={{
      backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2JhY2tncm91bmRqb2IxNzE5LWJhY2tncm91bmQtMDIuanBn.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center ",
    }}
    // style={{ backgroundColor: "#e8d4ca
    // style={{ backgroundImage:"url(https://img.freepik.com/free-photo/canvas-background-with-paint-texture_91008-505.jpg?semt=ais_hybrid&w=740)"}}        // src="https://greatpeopleinside.com/wp-content/uploads/2019/11/team-building-1030x579.jpg"

    >
      <div className="position-relative container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(https://greatpeopleinside.com/wp-content/uploads/2019/11/team-building-1030x579.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
            filter: "brightness(65%)",
          }}
        >
        </div>
        <div className="position-relative text-center my-3" style={{ zIndex: 2 }}>
          <h1 className="intro1 mea-culpa-regular fw-medium text-white my-4">About the team</h1>
        </div>
      </div>
      <motion.div className="container pt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <AboutTitle desc={'StylistStrokes: The Beauty of legacy and technology interwined'} title={'Our Mission'}></AboutTitle>
        <div className="row justify-content-center m-4 py-1 h5 text-center">We strive to blend timeless calligraphy artistry with modern design, bringing elegance and emotion to every stroke. Our mission is to preserve the beauty of the past while inspiring a new digital generation.<FaPaperPlane className="m-3" size={80}></FaPaperPlane></div>
      </motion.div>
      <motion.div className="container py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <AboutMiddle></AboutMiddle>
      </motion.div>
      <div className="container pt-5">
        <AboutTitle desc={"We aren't just somebody who merely have interest in calligraphy. We also are the desire of people"} title={'Our team'}></AboutTitle>
        <div className="row justify-content-center m-4 py-1 h5 text-center">We're a sincere team with straightforward vision and goal. With this in mind, we began to gather people together in April 2025. From there, the crew quickly expanded to 4 members, and we decide upon the name "StylistStrokes"<BsPeopleFill className="m-3" size={80}></BsPeopleFill></div>
        <Aboutcrew></Aboutcrew>
      </div>
      <div className="container pt-5">
        <AboutTitle desc={"We see. We do. We connect. We maintain tradition. And we leave nobody behind!"} title={'Our journey, our legacy'}></AboutTitle>
        <div className="row justify-content-center m-4 py-1 h5 text-center">Rooted in heritage, our work pays tribute to centuries of calligraphic art. Every line we draw echoes the hands of masters before us, leaving our own mark on the evolving story of the written word.

          <FaHandshakeSimple className="m-3" size={80}></FaHandshakeSimple></div>
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
        <AboutTitle desc={"The most difficult part of writing a travel journal is coming up with the beginning. And now we need you to continue the neverending journey!"} title={'Our future is you'}></AboutTitle>
        <div className="row justify-content-center m-4 py-1 h5 text-center">
          Your stories, your names, your dreams—written with care. Whether you're a fellow artist, a curious learner, or someone seeking meaningful design, you are the next chapter in our creative journey.
          <FaHeart className="m-3" size={80}></FaHeart>
          <div className="btn btn-info my-4 px-5">
            <YoutubeEmbed url="https://www.youtube.com/embed/t42_31OeUzA"></YoutubeEmbed>
          </div>

        </div>
      </div>
      <div className="container pt-5" style={{ backgroundColor: "" }}>
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
