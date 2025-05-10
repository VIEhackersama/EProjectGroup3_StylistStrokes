import React from "react";
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const testimonialStyle = `
 @font-face {
  font-family: 'UTM Thu Phap';
  src: url('/fonts/UTMThuPhap.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.testimonial {
  background: linear-gradient(to bottom, #8B5E3C 0%, #fdf6e3 35%);
  border: 4px solid #d2b48c; /* Viền vàng nâu */
  border-radius: 1.5rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  margin: 0 0.75rem;
  height: 100%;
  position: relative;
}

.testimonial::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 1.75rem;
  border: 2px dashed rgba(139, 94, 60, 0.25);
  pointer-events: none;
}

.testimonial:hover {
  transform: scale(1.02);
}

.testimonial p {
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 2rem;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
  flex-grow: 1;
}

.testimonial h5 {
  font-weight: 600;
  font-size: 1.1rem;
  color: #000;
  margin-bottom: 0.5rem;
}

.testimonial img {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid #e0c9a6;
  object-fit: cover;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 1rem;
}

.testimonial-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.slick-slide {
  padding: 10px;
  height: auto !important;
}

.slick-list {
  margin: 0 -10px;
}
`;



const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Inject CSS trực tiếp */}
      <style>{testimonialStyle}</style>

      <Slider {...settings}>
        <div className="testimonial py-4 px-3">
          <p>
            As someone who has always appreciated Vietnamese traditions,
            discovering this calligraphy service was like reconnecting with my
            roots. Each brushstroke feels deliberate, full of emotion, and
            guided by years of dedication. I commissioned a piece for Tết, and
            not only did it impress my family, it also brought a sense of
            serenity to our home. The artist’s attention to detail, combined
            with deep cultural understanding, is truly admirable. This isn’t
            just ink on paper.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h5 className="mb-0 mt-3">John Doe</h5>
              <p>Custome</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p>
            I was looking for something meaningful to gift my father on his
            birthday, and I stumbled upon this beautiful calligraphy work. What
            I received was far beyond my expectations. The character was
            graceful, flowing, and full of life. The ink seemed to dance on the
            page. My father was moved to tears—it reminded him of the old
            masters from his childhood in Hue. It's rare to find such
            authenticity and skill nowadays. This is more than art; it's a piece
            of cultural soul preserved .
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h5 className="mb-0 mt-3">John Doe</h5>
              <p>Custome</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p>
            Watching the calligrapher work in silence was one of the most
            calming experiences I’ve had. There’s something sacred about how he
            prepares the ink, the brush, and his mind before each stroke. I
            commissioned a piece for my meditation space, and now I can’t
            imagine it without it. The energy of the words seems to radiate
            peace and wisdom. You don’t just get a decorative piece—you receive
            a spiritual message shaped by tradition, patience, and matery.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h5 className="mb-0 mt-3">John Doe</h5>
              <p>Custome</p>
            </div>
          </div>
        </div>

        <div className="testimonial py-4 px-3">
          <p>
            I’ve always loved the visual elegance of Asian calligraphy, but this
            experience gave me so much more. The work I received is poetic,
            precise, and filled with emotion. I was able to choose a meaningful
            phrase, and the artist brought it to life with such grace and
            integrity. It now hangs in my studio, reminding me daily of balance,
            intention, and beauty. These pieces speak louder than any words—they
            express what’s in the heart of Vietnamese culturehellofpt.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
              <h5 className="mb-0 mt-3">John Doe</h5>
              <p>Custome</p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Testimonials;