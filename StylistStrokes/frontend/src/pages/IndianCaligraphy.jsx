import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Calligraphy.css";

function IndianCalligraphy() {
  return (
    <motion.div
      className="calligraphy-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2JhY2tncm91bmRqb2IxNzE5LWJhY2tncm91bmQtMDIuanBn.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center ",
    }}
    >
      <div className="content-box"
       >
        <h1>The Art of Indian Calligraphy</h1>
        <motion.div
          className="video-container my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/uqKnbNvQFzo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Indian Calligraphy Video"
          />
        </motion.div>
        <p>
          Indian calligraphy is a graceful art rooted in centuries of spiritual and cultural
          expression. From ancient scriptures to Mughal manuscripts, it reflects a deep
          connection between language and aesthetics across multiple scripts and traditions.
        </p>
        <div className="button-group">
          <a
            href="https://en.wikipedia.org/wiki/Indian_calligraphy"
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

export default IndianCalligraphy;
