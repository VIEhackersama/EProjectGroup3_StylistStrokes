import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function KoreanCalligraphy() {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>The Art of Korean Calligraphy</h1>
      <img src="/image/Korean.jpg" alt="Korean Calligraphy" style={{ maxWidth: "100%" }} />
      <p className="mt-3">
        Korean calligraphy is an exquisite art form using Hangul characters.
        Through centuries, it has evolved from simple scripts into expressive
        artworks symbolizing harmony, balance, and Korean cultural pride.
      </p>
      <a href="https://en.wikipedia.org/wiki/Korean_calligraphy" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
        Learn More
      </a>
      <br />
      <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
    </motion.div>
  );
}

export default KoreanCalligraphy;
