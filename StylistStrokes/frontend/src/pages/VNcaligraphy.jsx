import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Calligraphy.css"; // dùng chung style

function VietnamCalligraphy() {
  return (
    <motion.div
      className="calligraphy-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2JhY2tncm91bmRqb2IxNzE5LWJhY2tncm91bmQtMDIuanBn.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center ",
    }}
    >
      <div className="content-box">
        <h1>The Art of Vietnamese Calligraphy</h1>
        <motion.div
          className="video-container my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          
        >
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/sSTSqnP98A4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Vietnamese Calligraphy Video"
          />
        </motion.div>
        <p>
          Vietnamese calligraphy reflects the beauty of traditional Vietnamese
          culture. Artists use delicate brush strokes to express deep emotions,
          wisdom, and life philosophy, making each work a poetic masterpiece.
        </p>
        <div className="button-group">
          <a
            href="https://en.wikipedia.org/wiki/Vietnamese_calligraphy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            Learn More
          </a>
          <Link to="/gallery" className="btn secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default VietnamCalligraphy;
