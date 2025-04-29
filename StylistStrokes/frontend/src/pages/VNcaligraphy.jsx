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
    >
      <div className="content-box">
        <h1>The Art of Vietnamese Calligraphy</h1>
        <img
          src="/image/Vietnam.jpg"
          alt="Vietnam Calligraphy"
          className="calligraphy-image"
        />
        <p>
          Vietnamese calligraphy reflects the beauty of traditional Vietnamese culture.
          Artists use delicate brush strokes to express deep emotions, wisdom, and life philosophy,
          making each work a poetic masterpiece.
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
          <Link to="/" className="btn secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default VietnamCalligraphy;
