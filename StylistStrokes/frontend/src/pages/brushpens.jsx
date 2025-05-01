import React from "react";
import "../styles/courseDetail.css"; 
function BrushPen() {
  return (
    <div className="course-detail container py-5">
      <div className="banner rounded-4 mb-4" style={{ backgroundImage: "url('/image/brushpen.jpg')" }}>
        <div className="banner-overlay d-flex align-items-center justify-content-center">
          <h1 className="text-white fw-bold display-5">Brush Pen Techniques</h1>
        </div>
      </div>

      <div className="content text-muted">
        <h3 className="fw-semibold text-dark">What You'll Learn</h3>
        <ul className="custom-list mt-3">
          <li>Mastering brush pen strokes for clean lines</li>
          <li>Exploring expressive styles of calligraphy</li>
          <li>Creating basic letterforms with brush pen</li>
          <li>Learning pressure control and fluid motions</li>
        </ul>

        <p className="mt-4">
          This course is perfect for intermediate calligraphers who want to enhance their brush pen skills. You’ll learn how to form beautiful brush pen scripts and explore artistic techniques to create unique letterforms and flourishing.
        </p>

        <div className="mt-5 text-center">
          <a href="/contact" className="btn btn-gradient-custom px-4 py-2">Enroll now !</a>
        </div>
      </div>
    </div>
  );
}

export default BrushPen;
