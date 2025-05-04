import React from "react";
import "../styles/courseDetail.css";
import { motion } from "framer-motion";

function Beginner() {
  return (
    <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/canvas-background-with-paint-texture_91008-505.jpg?semt=ais_hybrid&w=740)" }}>
    <div
      className="py-4 container container-fluid "
    >
      <motion.div
        className="banner rounded-4 mb-4 shadow-lg custom-image"
        style={{
          backgroundImage: "url('/image/beginner.jpg')",
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="banner-overlay d-flex align-items-center justify-content-center rounded-4">
          <h1 className="text-white fw-bold display-5">
            Beginner's Calligraphy
          </h1>
        </div>
      </motion.div>

      <div className="content text-muted bg-white rounded-4 p-4 shadow-sm">
        <h3 className="fw-semibold text-dark mb-3">What You'll Learn</h3>
        <ul className="custom-list mt-3 ps-3">
          <li>Basic strokes and warm-up drills</li>
          <li>How to hold your pen and control pressure</li>
          <li>Forming letters and connecting them</li>
          <li>Simple word and name practice</li>
        </ul>

        <motion.div
          className="banner rounded-4 mb-4"
          style={{
            backgroundImage: "url('/image/1.jpg')",
            height: "450px", 
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <p className="mt-3 fs-6">
          This course is designed for complete beginners who want to dive into
          the world of modern calligraphy using tools like dip pens or brush
          pens. It includes worksheets and video tutorials you can download and
          practice at your own pace.
        </p>
        <div className="mt-5">
  <h4 className="fw-semibold text-dark">In-depth Course Overview</h4>
  <p>
    The Beginner's Calligraphy course is structured to guide learners from the very basics of writing to building muscle memory for consistent strokes. 
    You will explore letterforms in lowercase and uppercase, practice spacing and alignment, and develop a personal writing rhythm.
  </p>
  <p>
    In addition to hands-on exercises, the course includes downloadable practice sheets, guided video demonstrations, and weekly assignments to keep you motivated. 
    You'll also gain insight into pen maintenance, ink types, and paper selection for different styles of calligraphy.
  </p>
  <p>
    By the end of the course, you will be able to confidently write beautiful letter compositions, understand common mistakes and how to fix them, and have a strong foundation to move on to intermediate and advanced calligraphy styles.
  </p>
</div>


        <div className="mt-5 text-center">
          <a href="/contact" className="btn btn-gradient-custom px-4 py-2 rounded-pill shadow-sm">
            Enroll now !
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Beginner;
