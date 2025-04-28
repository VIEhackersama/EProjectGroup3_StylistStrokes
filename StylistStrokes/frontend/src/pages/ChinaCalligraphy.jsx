import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ChinaCalligraphy() {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>The Art of Chinese Calligraphy</h1>
      <img src="/image/china.jpg" alt="Chinese Calligraphy" style={{ maxWidth: "100%" }} />
      <p className="mt-3">
        Chinese calligraphy is a timeless art that embodies elegance and philosophy.
        Each brushstroke carries profound meaning, symbolizing the unity of mind,
        body, and spirit through the graceful movement of ink on paper.
      </p>
      <a href="https://en.wikipedia.org/wiki/Chinese_calligraphy" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
        Learn More
      </a>
      <br />
      <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
    </motion.div>
  );
}

export default ChinaCalligraphy;
