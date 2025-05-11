import React, { useState } from "react";
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import calligraphyScroll from '../assets/images/calligraphy-scroll.png'
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/subscribe", { email });
      if (response.status === 201) {
        setMessage("Successful! Thank you for joining us!");
        setEmail(""); 
      }
    } catch (error) {
      setMessage("Failed due to error occured");
      console.error(error);
    }
  };
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to receive early access to future information.</h2>

              <div className="newsletter__input">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe} className="btn newsletter__btn">Subscribe</button>
              </div>
              {message && <p className=" fw-bold newsletter__message">{message}</p>}
              <p>Join the journey – receive timeless wisdom of StylistStrokes.</p>
              <div className="small">By submitting your email, you are confirming that you have read and fully agreed to our <a href="">Terms of service</a> and Piracy policy. You may have option to opt out anytime by unsubscribing in your email serivce. </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={calligraphyScroll} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;