import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Calligraphy.css";

function ArabicCalligraphy() {
  return (
    <motion.div
      className="calligraphy-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-box">
        <h1>The Art of Arabic Calligraphy</h1>
        <img
          src="/image/Arabic.png"
          alt="Arabic Calligraphy"
          className="calligraphy-image"
        />
        <p>
          Arabic calligraphy is one of the most admired forms of Islamic art.
          With flowing lines and intricate designs, it not only conveys language
          but also serves as a spiritual and decorative expression across centuries.
        </p>
        <div className="button-group">
          <a
            href="https://en.wikipedia.org/wiki/Arabic_calligraphy"
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

export default ArabicCalligraphy;
