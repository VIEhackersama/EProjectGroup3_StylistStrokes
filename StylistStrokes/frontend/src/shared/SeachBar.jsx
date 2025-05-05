import React, { useRef } from "react";
import './search-bar.css'
import { Col, Form, FormGroup } from "reactstrap"

const SearchBar = () => {

    const localtionRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)


    const searchHandler = () => {

        const location = localtionRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if (location === "" || distance === "" || maxGroupSize === "") {
            return alert("All fields are required!");
        }
    }

    return <Col lg='12'>
        <div style={{ backgroundColor: "white" }} className="shadow search__bar">
            <Form className="d-flex align-items-center gap-4">
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span>
                        <i class="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input className="border rounded-5 p-1" type="text" placeholder="Where shall you go?"
                            ref={localtionRef} />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span>
                        <i class="ri-map-pin-time-line"></i>
                    </span>
                    <div>
                        <h6>Distance</h6>
                        <input className="border rounded-5 p-1" type="text" placeholder="5cm to your heart"
                            ref={distanceRef} />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span>
                        <i class="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>Max People</h6>
                        <input className="border rounded-5 p-1" type="text" placeholder="Many of us"
                            ref={maxGroupSizeRef} />
                    </div>
                </FormGroup>

                <span className="search__icon" type='submit' onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
};

export default SearchBar;