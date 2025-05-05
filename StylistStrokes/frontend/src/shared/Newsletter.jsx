import React from "react";
import './newsletter.css'

import { Container, Row,Col } from 'reactstrap'
import calligraphyScroll from '../assets/images/calligraphy-scroll.png'

const Newsletter = () => {
  return( 
   <section className="newsletter">
     <Container>
        <Row>
            <Col lg="6">
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information.</h2>

                    <div className="newsletter__input">
                         <input type="email" placeholder="Enter your email" />
                         <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                    <p>Join the journey – receive timeless wisdom of calligraphy.?</p>
                </div>
            </Col>
            <Col lg="6">
               <div className="newsletter__img">
                    <img src={calligraphyScroll} alt=""/>
               </div>
            </Col>
        </Row>
     </Container>
  </section>
);
};

export default Newsletter;