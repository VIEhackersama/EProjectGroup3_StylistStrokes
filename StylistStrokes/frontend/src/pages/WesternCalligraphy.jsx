import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function WesternCalligraphy() {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>The Art of Western Calligraphy</h1>
      <img src="/image/Western.jpg" alt="Western Calligraphy" style={{ maxWidth: "100%" }} />
      <p className="mt-3">
        Western calligraphy has evolved from ancient Roman scripts to elegant
        medieval manuscripts. Through careful strokes and ornamental styles,
        it represents the artistic tradition of writing across Western cultures.
      </p>
      <a href="https://en.wikipedia.org/wiki/Western_calligraphy" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
        Learn More
      </a>
      <br />
      <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
    </motion.div>
  );
}

export default WesternCalligraphy;
