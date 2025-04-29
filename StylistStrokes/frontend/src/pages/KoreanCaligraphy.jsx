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
        <img
          src="/image/Korean.jpg"
          alt="Korean Calligraphy"
          className="calligraphy-image"
        />
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
          <Link to="/" className="btn secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default KoreanCalligraphy;
