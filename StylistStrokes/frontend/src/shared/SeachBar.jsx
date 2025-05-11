import React from "react";
import Slider from "react-slick";
import './search-bar.css';

import calligrapherImg01 from '../assets/images/calligrapher-01.jpg';
import calligrapherImg02 from '../assets/images/calligrapher-06.jpg';
import calligrapherImg03 from '../assets/images/calligrapher-03.jpg';
import calligrapherImg04 from '../assets/images/calligrapher-05.jpg';

const calligraphers = [
  {
    name: "Wang Xizhi",
    avatar: calligrapherImg01,
    date: "1051–1107",
    description: "Saint of Calligraphy during the Eastern Jin period, renowned for his work Lanting Xu, laid the foundation for Chinese calligraphy art."
  },
  {
    name: "Mir Emad Hassani",
    avatar: calligrapherImg02,
    date: "1554–1615",
    description: "He was born in Qazvin, Iran. It is believed that the Nastaʿlīq style reached its highest elegance in Mir Emad's works.These are considered amongst the finest specimens of Nastaʿlīq calligraphy and are kept in several museums in the world."
  },
  {
    name: "Mi Fu",
    avatar: calligrapherImg03,
    date: "1051–1107",
    description: "A highly talented artist of the Northern Song period, renowned for his expressive writing style, reflecting a creative personality that transcends time."
  },
  {
    name: "Aslam Kiratpuri",
    avatar: calligrapherImg04,
    date: "1951 - Now ",
    description: "An Urdu journalist, artist and a professional Lahori Nastalique calligrapher. He creates his calligraphic Toghras, intricate works of calligraphy in different styles using verses from the Quran along with various geometric and floral designs."
  },
];

const SearchBar = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="search-bar-container py-5">
      <div className="container">
        <Slider {...settings}>
          {calligraphers.map((artist, index) => (
            <div key={index} className="px-3">
              <div className="wood-frame-card text-center h-100">
                <img
                  src={artist.avatar}
                  alt={artist.name}
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div className="parchment px-3 pt-3 pb-4 mt-3">
                  <h5 className="fw-bold">{artist.name}</h5>
                  <small className="text-muted mb-2 d-block">{artist.date}</small>
                  <p className="small">{artist.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SearchBar;
