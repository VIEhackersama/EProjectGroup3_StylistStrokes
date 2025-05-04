import React from "react";
import "../styles/courseDetail.css";
import { motion } from "framer-motion";

function BrushPen() {
  return (
    <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/canvas-background-with-paint-texture_91008-505.jpg?semt=ais_hybrid&w=740)" }}>
    <div
      className="py-4 container"
    >
      <motion.div
        className="banner rounded-4 mb-4"
        style={{ backgroundImage: "url('/image/brushpen.jpg')" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="banner-overlay d-flex align-items-center justify-content-center">
          <h1 className="text-white fw-bold display-5">Brush Pen Techniques</h1>
        </div>
      </motion.div>
      <motion.div
        className="content text-muted"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="fw-semibold text-dark">What You'll Learn</h3>
        <ul className="custom-list mt-3">
          <li>✓ Mastering brush pen strokes for clean lines</li>
          <li>✓ Exploring expressive styles of calligraphy</li>
          <li>✓ Creating basic letterforms with brush pen</li>
          <li>✓ Learning pressure control and fluid motions</li>
        </ul>

        <motion.div
          className="video-container my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/j70DZ24OAqE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Brush Pen Techniques Video"
          />
        </motion.div>
       
        <div className="mt-4">
          <h4 className="fw-semibold text-dark">In-depth Course Overview</h4>
          <p>
            Beyond basic strokes, this course dives deeper into expressive calligraphy using brush pens.
            You’ll master advanced pressure techniques, explore creative layouts, and refine your unique style.
          </p>

          <h5 className="fw-semibold text-dark mt-4">Who is this course for?</h5>
          <motion.div
            className="banner rounded-4 my-4"
            style={{
              backgroundImage: "url('/image/3.jpg')",
              height: "360px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <p>
            This course is ideal for those who already have a foundation in calligraphy or have completed the beginner’s course.
            Whether you're a hobbyist or aspiring professional, this course will strengthen your control and creativity with brush pens.
          </p>

          <h5 className="fw-semibold text-dark mt-4">What you'll achieve</h5>
          <ul className="custom-list mt-2">
            <li>Build confidence with complex brush pen techniques</li>
            <li>Create fluid, natural strokes with consistent rhythm</li>
            <li>Compose full pieces like quotes, cards, or posters</li>
            <li>Develop your own signature calligraphy style</li>
          </ul>

          <h5 className="fw-semibold text-dark mt-4">Resources & Tools Included</h5>
          <ul className="custom-list mt-2">
            <li>Downloadable practice sheets (PDF)</li>
            <li>High-quality video demonstrations</li>
            <li>Recommended brush pen brands & papers</li>
            <li>Feedback on final projects (optional)</li>
          </ul>

          <h5 className="fw-semibold text-dark mt-4">Course Roadmap</h5>
          <ol className="mt-2 ms-3">
            <li>Review of basic brush strokes</li>
            <li>Pressure and motion control</li>
            <li>Brush alphabet mastery (uppercase & lowercase)</li>
            <li>Word composition and spacing</li>
            <li>Flourishing techniques and layout design</li>
            <li>Creating your final calligraphy project</li>
          </ol>
        </div>

        <p>
          This course is perfect for intermediate calligraphers who want to enhance their brush pen skills.
          You’ll learn how to form beautiful brush pen scripts and explore artistic techniques to create unique letterforms and flourishing.
        </p>

        {/* Mô tả chuyên sâu */}
        <div className="mt-4">
          <h4 className="fw-semibold text-dark">In-depth Course Overview</h4>
          <p>
            Beyond basic strokes, you will explore techniques for fluid composition, dynamic layouts, and personal artistic expression.
            Our carefully structured exercises help you master balance, spacing, and movement to bring your brush calligraphy to life.
          </p>
          <p>
            The course also introduces color transitions, advanced curves, and how to craft complete pieces like greeting cards, invitations,
            or artistic quotes that showcase your own style.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-5 text-center">
          <a href="/contact" className="btn btn-gradient-custom enroll-btn px-4 py-2">
            Enroll now !
          </a>
        </div>
      </motion.div>
    </div>
    </div>
  );
}

export default BrushPen;
