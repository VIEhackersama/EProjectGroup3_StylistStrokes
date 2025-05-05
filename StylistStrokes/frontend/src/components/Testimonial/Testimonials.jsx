import React from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
              },
            },
        ]
    }
  return( 
    <Slider { ...settings} >
       <div className="testimonial py-4 px-3">
          <p>As someone who has always appreciated Vietnamese traditions, discovering this calligraphy service was like reconnecting with my roots. Each brushstroke feels deliberate, full of emotion, and guided by years of dedication. I commissioned a piece for Tết, and not only did it impress my family, it also brought a sense of serenity to our home. The artist’s attention to detail, combined with deep cultural understanding, is truly admirable. This isn’t just ink on paper—it’s the spirit.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava01} className='w-25 h-25 rounded-2' alt="" /> 
           <div>
               <h5 className="mb-0 mt-3" >John Doe</h5>
               <p>Custome</p>
           </div>
          </div>
       </div>
       <div className="testimonial py-4 px-3">
          <p>I was looking for something meaningful to gift my father on his birthday, and I stumbled upon this beautiful calligraphy work. What I received was far beyond my expectations. The character was graceful, flowing, and full of life. The ink seemed to dance on the page. My father was moved to tears—it reminded him of the old masters from his childhood in Hue. It's rare to find such authenticity and skill nowadays. This is more than art; it's a piece of cultural soul preserved for future generations.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava02} className='w-25 h-25 rounded-2' alt="" /> 
           <div>
               <h5 className="mb-0 mt-3" >John Doe</h5>
               <p>Custome</p>
           </div>
          </div>
       </div>
       <div className="testimonial py-4 px-3">
          <p>Watching the calligrapher work in silence was one of the most calming experiences I’ve had. There’s something sacred about how he prepares the ink, the brush, and his mind before each stroke. I commissioned a piece for my meditation space, and now I can’t imagine it without it. The energy of the words seems to radiate peace and wisdom. You don’t just get a decorative piece—you receive a spiritual message shaped by tradition, patience, and mastery.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava03} className='w-25 h-25 rounded-2' alt="" /> 
           <div>
               <h5 className="mb-0 mt-3" >John Doe</h5>
               <p>Custome</p>
           </div>
          </div>
       </div>
       <div className="testimonial py-4 px-3">
          <p>I’ve always loved the visual elegance of Asian calligraphy, but this experience gave me so much more. The work I received is poetic, precise, and filled with emotion. I was able to choose a meaningful phrase, and the artist brought it to life with such grace and integrity. It now hangs in my studio, reminding me daily of balance, intention, and beauty. These pieces speak louder than any words—they express what’s in the heart of Vietnamese culture.
          </p>
          <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava02} className='w-25 h-25 rounded-2' alt="" /> 
           <div>
               <h5 className="mb-0 mt-3" >John Doe</h5>
               <p>Custome</p>
           </div>
          </div>
       </div>
  </Slider>
);
}; 

export default Testimonials;