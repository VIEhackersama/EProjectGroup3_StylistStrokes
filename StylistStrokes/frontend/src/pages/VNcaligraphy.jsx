import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function VietnamCalligraphy() {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>The Art of Vietnamese Calligraphy</h1>
      <img src="/image/Vietnam.jpg" alt="Vietnam Calligraphy" style={{ maxWidth: "100%" }} />
      <p className="mt-3">
        Vietnamese calligraphy reflects the beauty of traditional Vietnamese culture.
        Artists use delicate brush strokes to express deep emotions, wisdom, and life philosophy,
        making each work a poetic masterpiece.
      </p>
      <a href="https://en.wikipedia.org/wiki/Vietnamese_calligraphy" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
        Learn More
      </a>
      <br />
      <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
    </motion.div>
  );
}

export default VietnamCalligraphy;
