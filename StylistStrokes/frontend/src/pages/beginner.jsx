import React from "react";
import "../styles/courseDetail.css";

function Beginner() {
  return (
    <div className="course-detail container py-5">
      <div className="banner rounded-4 mb-4" style={{ backgroundImage: "url('/image/beginner.jpg')" }}>
        <div className="banner-overlay d-flex align-items-center justify-content-center">
          <h1 className="text-white fw-bold display-5">Beginner's Calligraphy</h1>
        </div>
      </div>

      <div className="content text-muted">
        <h3 className="fw-semibold text-dark">What You'll Learn</h3>
        <ul className="custom-list mt-3">
          <li>Basic strokes and warm-up drills</li>
          <li>How to hold your pen and control pressure</li>
          <li>Forming letters and connecting them</li>
          <li>Simple word and name practice</li>
        </ul>

        <p className="mt-4">
          This course is designed for complete beginners who want to dive into the world of modern calligraphy using tools like dip pens or brush pens. It includes worksheets and video tutorials you can download and practice at your own pace.
        </p>

        <div className="mt-5 text-center">
          <a href="#" className="btn btn-gradient-custom px-4 py-2">Start now</a>
        </div>
      </div>
    </div>
  );
}

export default Beginner;
