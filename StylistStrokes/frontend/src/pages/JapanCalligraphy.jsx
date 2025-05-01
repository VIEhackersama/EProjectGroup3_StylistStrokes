import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Calligraphy.css"; 

function JapanCalligraphy() {
  return (
    <motion.div
      className="calligraphy-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-box">
        <h1>The Art of Japanese Calligraphy</h1>
        <img
          src="/image/Japan.jpg"
          alt="Japanese Calligraphy"
          className="calligraphy-image"
        />
        <p>
          Known as "Shodo," Japanese calligraphy emphasizes simplicity, fluidity,
          and discipline. Every character reflects beauty through balance and emotion,
          offering a meditative practice tied deeply to Zen philosophy.
        </p>
        <div className="button-group">
          <a
            href="https://en.wikipedia.org/wiki/Japanese_calligraphy"
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

export default JapanCalligraphy;
