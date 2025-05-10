import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Calligraphy.css";

function KoreanCalligraphy() {
  return (
    <motion.div
      className="calligraphy-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-box">
        <h1>The Art of Korean Calligraphy</h1>
        <motion.div
          className="video-container my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/HExu4YkfbQk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="korean Calligraphy Video"
          />
        </motion.div>
        <p>
          Korean calligraphy is an exquisite art form using Hangul characters.
          Through centuries, it has evolved from simple scripts into expressive
          artworks symbolizing harmony, balance, and Korean cultural pride.
        </p>
        <div className="button-group">
          <a
            href="https://en.wikipedia.org/wiki/Korean_calligraphy"
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

export default KoreanCalligraphy;
