import React from "react";
import Slider from "react-slick";
import './search-bar.css';

import calligrapherImg01 from '../assets/images/calligrapher-01.jpg';
import calligrapherImg02 from '../assets/images/calligrapher-02.jpg';
import calligrapherImg03 from '../assets/images/calligrapher-03.jpg';
import calligrapherImg04 from '../assets/images/calligrapher-04.jpg';

const calligraphers = [
  {
    name: "Wang Xizhi",
    avatar: calligrapherImg01,
    date: "米芾; 1051–1107",
    description: "Saint of Calligraphy during the Eastern Jin period, renowned for his work Lanting Xu, laid the foundation for Chinese calligraphy art. I love VietNamese"
  },
  {
    name: "Huai Su",
    avatar: calligrapherImg02,
    date: "米芾; 1051–1107",
    description: "The Tang dynasty monk known for his wild cursive style, characterized by strong and free-spirited strokes, expressing intense emotions through each brushstroke."
  },
  {
    name: "Mi Fu",
    avatar: calligrapherImg03,
    date: "米芾; 1051–1107",
    description: "A highly talented artist of the Northern Song period, renowned for his expressive writing style, reflecting a creative personality that transcends time."
  },
  {
    name: "Zhao Mengfu",
    avatar: calligrapherImg04,
    date: "米芾; 1051–1107",
    description: "A renowned scholar of the Yuan dynasty, who revived the art of calligraphy with a harmonious blend of tradition and modern creativity. I love VietNamese"
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
      <div className="text-center mb-4">
        <h2 className="fw-bold">Top Calligraphy Artists</h2>
        <p>Discover legendary calligraphers who shaped the beauty of script.</p>
      </div>
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
