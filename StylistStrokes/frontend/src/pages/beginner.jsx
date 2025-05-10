import React from "react";
import "../styles/courseDetail.css";
import { motion } from "framer-motion";

function Beginner() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/canvas-background-with-paint-texture_91008-505.jpg?semt=ais_hybrid&w=740)",
      }}
    >
      <div className="py-4 container container-fluid">
        <motion.div
          className="banner rounded-4 mb-4 shadow-lg custom-image"
          style={{ backgroundImage: "url('/image/beginner.jpg')" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="banner-overlay d-flex align-items-center justify-content-center rounded-4">
            <h1 className="text-white fw-bold display-5">
              Calligraphy for Beginners
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="video-container my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/nj962-cU2PQ
"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Beginner Calligraphy Video"
          />
        </motion.div>

        <div>
          <h3 className="fw-semibold text-dark mb-3">What You'll Learn</h3>
          <ul className="custom-list mt-3 ps-3">
            <li>✓ Understanding basic calligraphy tools</li>
            <li>✓ Learning foundational strokes and letterforms</li>
            <li>✓ Practicing with guided worksheets</li>
            <li>✓ Creating simple quotes and compositions</li>
          </ul>

          <motion.div
            className="banner rounded-4 my-4"
            style={{
              backgroundImage: "url('/image/1.jpg')",
              height: "360px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <p>
            This course is designed for absolute beginners. You'll learn how to
            hold your pen, make clean strokes, and form beautiful letters step
            by step.
          </p>

          <div className="mt-5">
            <h4 className="fw-semibold text-dark">In-depth Course Overview</h4>
            <p>
              We’ll start with the anatomy of letters, introduce pen pressure
              techniques, and move into full alphabet practice. You'll also get
              creative projects like making your own quote poster or gift tag.
            </p>
          </div>

          <div className="mt-4">
            <h5 className="fw-semibold text-dark">Who is this course for?</h5>
            <p>
              Perfect for complete beginners. If you've never held a brush pen
              or dip pen, this course is for you. Great for creatives, students,
              or hobbyists.
            </p>
          </div>

          <div className="mt-4">
            <h5 className="fw-semibold text-dark">What you'll achieve</h5>
            <ul className="custom-list mt-2">
              <li>Understand how to use calligraphy tools</li>
              <li>Write basic strokes and alphabets</li>
              <li>Create simple calligraphy pieces</li>
              <li>Build a daily practice routine</li>
            </ul>
          </div>

          <div className="mt-4">
            <h5 className="fw-semibold text-dark">
              Resources & Tools Included
            </h5>
            <ul className="custom-list mt-2">
              <li>Downloadable alphabet worksheets (PDF)</li>
              <li>Introductory videos and demos</li>
              <li>Starter pen and paper recommendations</li>
              <li>Bonus: Printable quote templates</li>
            </ul>
          </div>

          <div className="mt-4">
            <h5 className="fw-semibold text-dark">Course Roadmap</h5>
            <ol className="mt-2 ms-3">
              <li>Introduction to tools and posture</li>
              <li>Basic strokes and grip technique</li>
              <li>Lowercase alphabet practice</li>
              <li>Uppercase letters and variation</li>
              <li>Simple compositions and spacing</li>
              <li>Final project: Create your own quote design</li>
            </ol>
          </div>

          <div className="student-testimonials mt-5">
            <h4 className="fw-semibold text-dark">What Our Students Say</h4>

            <div className="testimonial mt-4">
              <p className="italic">
                "I had no idea where to start with calligraphy, and this course
                made everything so clear and easy!"
              </p>
              <p className="fw-bold">- Minh T., Student</p>
            </div>

            <div className="testimonial mt-4">
              <p className="italic">
                "The worksheets and video instructions were super helpful. I’m
                already designing birthday cards!"
              </p>
              <p className="fw-bold">- Lan N., Hobbyist</p>
            </div>
          </div>

          <div className="mt-5 text-center">
            <a href="/contact" className="btn btn-gradient-custom px-4 py-2">
              Enroll now !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beginner;
