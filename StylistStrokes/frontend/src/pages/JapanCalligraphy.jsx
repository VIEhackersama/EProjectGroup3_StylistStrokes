import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function JapanCalligraphy() {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>The Art of Japanese Calligraphy</h1>
      <img src="/image/Japan.jpg" alt="Japanese Calligraphy" style={{ maxWidth: "100%" }} />
      <p className="mt-3">
        Known as "Shodo," Japanese calligraphy emphasizes simplicity, fluidity,
        and discipline. Every character reflects beauty through balance and emotion,
        offering a meditative practice tied deeply to Zen philosophy.
      </p>
      <a href="https://en.wikipedia.org/wiki/Japanese_calligraphy" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
        Learn More
      </a>
      <br />
      <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
    </motion.div>
  );
}

export default JapanCalligraphy;
