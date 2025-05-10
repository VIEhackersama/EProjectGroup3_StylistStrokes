import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Calligraphy.css";

function JapanCalligraphy() {
  return (
    <motion.div
      className="calligraphy-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-box">
        <h1
          style={{ fontSize: "2rem", color: "#4B0082", marginBottom: "20px" }}
        >
          The Art of Japanese Calligraphy
        </h1>
        <motion.div
          className="video-container my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/bdhVRGMIlFg"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Japanese Calligraphy Video"
          />
        </motion.div>
        <div
          style={{
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#333",
            marginTop: "20px",
            lineHeight: "1.6",
          }}
        >
          Known as "Shodo," Japanese calligraphy emphasizes simplicity,
          fluidity, and discipline. Every character reflects beauty through
          balance and emotion, offering a meditative practice tied deeply to Zen
          philosophy.
        </p>
        <div className="button-group">
          <a
            href="https://en.wikipedia.org/wiki/Japanese_calligraphy"
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

export default JapanCalligraphy;
