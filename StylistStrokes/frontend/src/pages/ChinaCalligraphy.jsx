import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Calligraphy.css";

function ChinaCalligraphy() {
  return (
    <motion.div
      className="calligraphy-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-box">
        <h1>The Art of Chinese Calligraphy</h1>
        <img
          src="/image/china.jpg"
          alt="Chinese Calligraphy"
          className="calligraphy-image"
        />
        <p>
          Chinese calligraphy is a timeless art that embodies elegance and philosophy.
          Each brushstroke carries profound meaning, symbolizing the unity of mind,
          body, and spirit through the graceful movement of ink on paper.
        </p>
        <div className="button-group">
          <a
            href="https://en.wikipedia.org/wiki/Chinese_calligraphy"
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

export default ChinaCalligraphy;
