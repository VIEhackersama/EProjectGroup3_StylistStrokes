import React from "react";
import './search-bar.css';
import brushpenImg01 from '../assets/images/brushpen-1.jpg';
import brushpenImg02 from '../assets/images/brushpen-2.jpg';
import brushpenImg03 from '../assets/images/brushpen-3.jpg';
import brushpenImg04 from '../assets/images/brushpen-4.jpg';
import brushpenImg05 from '../assets/images/brushpen-5.jpg';
import brushpenImg06 from '../assets/images/brushpen-6.jpg';
import brushpenImg07 from '../assets/images/brushpen-7.jpg';
import brushpenImg08 from '../assets/images/brushpen-8.jpg';
import brushpenImg09 from '../assets/images/brushpen-9.jpg';
import brushpenImg10 from '../assets/images/brushpen-10.jpg';
import brushpenImg11 from '../assets/images/brushpen-11.jpg';
import brushpenImg12 from '../assets/images/brushpen-12.jpg';

const brushpenImages = [
  brushpenImg01, brushpenImg02, brushpenImg03, brushpenImg04,
  brushpenImg05, brushpenImg06, brushpenImg07, brushpenImg08,
  brushpenImg09, brushpenImg10, brushpenImg11, brushpenImg12
];

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      {/* Phần giới thiệu nghệ thuật thư pháp */}
      <div className="calligraphy-info mt-5 text-center">
        <h2>Explore the Art of Calligraphy</h2>
        <p>Timeless beauty with a collection of classic and modern calligraphy.</p>

        <div className="image-gallery container mt-4">
          <div className="row">
            {brushpenImages.map((img, index) => (
              <div key={index} className="col-6 col-md-3 mb-4 d-flex justify-content-center">
                <img
                  src={img}
                  alt={`Calligraphy ${index + 1}`}
                  className="img-fluid rounded-2"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 text-muted">
          Delicate pen strokes, inspirational quotes — perfect for decoration or gift giving.
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
