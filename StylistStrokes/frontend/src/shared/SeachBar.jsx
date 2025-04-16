import React from "react";
import './search-bar.css'
import { Col, Form,FormGroup } from "reactstrap"

const SearchBar  = () => {
  return <Col lg='12'> 
     <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
             <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                <div>
                    <h6>Location</h6>
                    <imput type="text" placeholder="Calligraphy breathes life into silence and stillness" />
                </div>
             </FormGroup>
             <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                <i class="ri-map-pin-time-line"></i>
                </span>
                <div>
                    <h6>Distance</h6>
                    <imput type="text" placeholder="Calligraphy breathes life into silence and stillness" />
                </div>
             </FormGroup>
             <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                <i class="ri-group-line"></i>
                </span>
                <div>
                    <h6>Max People</h6>
                    <imput type="text" placeholder="Calligraphy breathes life into silence and stillness" />
                </div>
             </FormGroup>
        </Form>
     </div>
  </Col>
};

export default SearchBar;