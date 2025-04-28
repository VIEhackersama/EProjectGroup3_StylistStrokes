import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ArabicCalligraphy() {
  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>The Art of Arabic Calligraphy</h1>
      <img src="/image/Arabic.png" alt="Arabic Calligraphy" style={{ maxWidth: "100%" }} />
      <p className="mt-3">
        Arabic calligraphy is one of the most admired forms of Islamic art.
        With flowing lines and intricate designs, it not only conveys language
        but also serves as a spiritual and decorative expression across centuries.
      </p>
      <a href="https://en.wikipedia.org/wiki/Arabic_calligraphy" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
        Learn More
      </a>
      <br />
      <Link to="/" className="btn btn-secondary mt-3">Back to Home</Link>
    </motion.div>
  );
}

export default ArabicCalligraphy;
