import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Calligraphy.css"; 

function WesternCalligraphy() {
  return (
    <motion.div
      className="calligraphy-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-box">
        <h1>The Art of Western Calligraphy</h1>
        <img
          src="/image/Western.jpg"
          alt="Western Calligraphy"
          className="calligraphy-image"
        />
        <p>
          Western calligraphy has evolved from ancient Roman scripts to elegant
          medieval manuscripts. Through careful strokes and ornamental styles,
          it represents the artistic tradition of writing across Western cultures.
        </p>
        <div className="button-group">
          <a
            href="https://en.wikipedia.org/wiki/Western_calligraphy"
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

export default WesternCalligraphy;
