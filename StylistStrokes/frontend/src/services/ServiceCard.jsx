import React from "react";
import "./service-card.css";

const ServiceCard = ({item}) => {

const {imgUrl, title,desc} = item
return ( 
     <div className="service__item card">
        <div className="service__img card-img">
           <img src={imgUrl} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>   

    </div>
  );
}; 

export default ServiceCard;