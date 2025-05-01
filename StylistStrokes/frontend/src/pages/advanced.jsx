import React from "react";
import "../styles/courseDetail.css"; 

function Advanced() {
  return (
    <div className="course-detail container py-5">
      <div
        className="banner rounded-4 mb-4"
        style={{ backgroundImage: "url('/image/advanced.jpg')" }}
      >
        <div className="banner-overlay d-flex align-items-center justify-content-center">
          <h1 className="text-white fw-bold display-5">Advanced Calligraphy</h1>
        </div>
      </div>

      <div className="content text-muted">
        <h3 className="fw-semibold text-dark">What You'll Master</h3>
        <ul className="custom-list mt-3">
          <li>Flourishing and embellishment techniques</li>
          <li>Creating custom calligraphy compositions</li>
          <li>Working with challenging letterforms and spacing</li>
          <li>Portfolio building and artistic identity</li>
        </ul>

        <p className="mt-4">
          This advanced course pushes your skills further by introducing
          artistic challenges and refinement techniques. Explore decorative
          flourishes, advanced layout strategies, and how to prepare your work
          for clients, exhibitions, or print. Ideal for those who want to
          pursue calligraphy professionally or at a high creative level.
        </p>

        <div className="mt-5 text-center">
          <a href="#" className="btn btn-gradient-custom px-4 py-2">
            Start now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Advanced;
