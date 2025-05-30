import React from "react";
import "../styles/courseDetail.css"; 

function Advanced() {
  return (
    <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/canvas-background-with-paint-texture_91008-505.jpg?semt=ais_hybrid&w=740)" }}>
    <div className="course-detail container container-fluid  py-5">
      {/* Banner */}
      <div
        className="banner rounded-4 mb-4"
        style={{ backgroundImage: "url('/image/advanced.jpg')" }}
      >
        <div className="banner-overlay d-flex align-items-center justify-content-center">
          <h1 className="text-white fw-bold display-5">Advanced Calligraphy</h1>
        </div>
      </div>

      {/* Nội dung khóa học */}
      <div className="content text-muted bg-white rounded-4 p-4 shadow-lg">
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

        {/* Chèn video YouTube */}
        <div className="video-container my-4">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/JicQ52zzjYI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Advanced Calligraphy Video"
          />
        </div>

        {/* Course Benefits */}
        <div className="course-benefits mt-5">
          <h4 className="fw-semibold text-dark">Why Choose This Course?</h4>
          <ul className="custom-list mt-3">
            <li>✓ Learn advanced techniques to make your work stand out.</li>
            <li>✓ Gain confidence in creating custom calligraphy compositions.</li>
            <li>✓ Perfect for building a professional portfolio.</li>
            <li>✓ Learn from an industry expert with over 10 years of experience.</li>
          </ul>
        </div>

        {/* Student Testimonials */}
        <div className="student-testimonials mt-5">
          <h4 className="fw-semibold text-dark">What Our Students Say</h4>
          <div className="testimonial mt-4">
            <p className="italic">"This course took my calligraphy skills to the next level! The lessons on flourishing and composition were invaluable. Highly recommend it!"</p>
            <p className="fw-bold">- Emma L., Graphic Designer</p>
          </div>
          <div className="testimonial mt-4">
            <p className="italic">"As a professional calligrapher, I needed something to enhance my portfolio. This course helped me refine my style and technique. Thank you!"</p>
            <p className="fw-bold">- David M., Calligraphy Artist</p>
          </div>
        </div>

        <div className="mt-5 text-center">
            <a
              href="/contact"
              className="btn btn-gradient-custom px-4 py-2"
            >
              Enroll now !
            </a>
          </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Advanced;
