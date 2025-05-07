import React, { useRef, useState } from "react";
import '../styles/caligraphy-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import caligraphyData from '../assets/data/caligraphy'
import calculateAvgRating from "./../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";

const CaligraphyDetails = () => {
  const { id } = useParams();
  const reviewMsRef = useRef('')
  const [caligraphyRating, setCaligraphyRating] = useState(null)

  // this is an static data later we will call our API and load our data from database
  const caligraphy = caligraphyData.find(caligraphy => caligraphy.id === id);

  //destructure properties from caligraphy object
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = caligraphy;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  //submid
  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsRef.current.value;

    alert(`${reviewText},${caligraphyRating}`);

  };

  return (
    <div style={{ backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2JhY2tncm91bmRqb2IxNzE5LWJhY2tncm91bmQtMDIuanBn.jpg)` }}>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="caligraphy__content">
                <img src={photo} alt="" />

                <div className="caligraphy__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="caligraphy__rating d-flex align-items-center gap-1">
                      <i class="ri-star-fill" style={{ color: "var(--secondary-color)" }}></i> {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (" Not rated") : (
                        <span>({reviews?.lenght})</span>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-user-fill"></i> {address}
                    </span>
                  </div>

                  <div className="caligraphy__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line"></i> {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i> ${price}
                      /per person
                    </span>
                    <span>
                      <i class="ri-map-pin-time-line"></i> ${distance}
                      k/m
                    </span>
                    <span>
                      <i class="ri-group-line"></i> {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* ======== caligraphy reviews section ======== */}
                <div className="caligraphy__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setCaligraphyRating(1)}>
                        1<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setCaligraphyRating(2)}>
                        2<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setCaligraphyRating(3)}>
                        3<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setCaligraphyRating(4)}>
                        4<i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setCaligraphyRating(5)}>
                        5<i class="ri-star-s-fill"></i>
                      </span>
                    </div>

                    <div style={{backgroundColor:"white"}} className="review__input">
                      <input type="=text" ref={reviewMsRef} placeholder="Share your thoughts" required />
                      <button className="btn primary__btn text-white" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map(review => (
                      <div className="review__item">
                        <img src={review.avatar || avatar} alt="avatar" />

                        <div className="w-100">
                          <div className="d-flex align-items-center 
                             justify-content-between">
                            <div>
                              <h5>muhbil</h5>
                              <p>
                                {new Date("01-18-2025").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center ">5<i class="ri-star-s-fill"></i></span>
                          </div>

                          <h6>Amazing caligraphy</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* ======== caligraphy reviews end  =========== */}
              </div>
            </Col>

            <Col lg="4">
              <Booking caligraphy={caligraphy} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CaligraphyDetails;