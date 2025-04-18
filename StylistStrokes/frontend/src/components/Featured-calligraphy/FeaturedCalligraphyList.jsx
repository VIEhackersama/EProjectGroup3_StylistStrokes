import React from "react";
import CalligraphyCard from '../../shared/CalligraphyCard';
import calligraphyData from '../../assets/data/caligraphy';
import { Col } from 'reactstrap'

const FeaturedCalligraphyList = () => {
  return <> 
  {
    calligraphyData?.map(tour=>(
        <Col lg='3' className="mb-4" key={tour.id}>
            <CalligraphyCard tour={tour}/>
        </Col>
    ))
  }
  </>
}; 

export default FeaturedCalligraphyList;