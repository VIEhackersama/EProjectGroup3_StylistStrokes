import React from "react";
import CaligraphyCard from '../../shared/CaligraphyCard';
import caligraphyData from '../../assets/data/caligraphy';
import { Col } from 'reactstrap'

const FeaturedCaligraphyList = () => {
  return(  
  <>
    {caligraphyData?.map(caligraphy=>(
        <Col lg='3' className="mb-4" key={caligraphy.id}>
            <CaligraphyCard caligraphy={caligraphy}/>
        </Col>
    ))}
  </>
);
}

export default FeaturedCaligraphyList;