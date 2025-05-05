import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Weather shifts, ink remains.",
        desc: "hough seasons change, ink endures.",
    },
    {
        imgUrl: guideImg,
        title: "The best guide writes with silence.",
        desc: "A true master writes in silence.",
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "Tailored strokes to reflect your soul.",
    },
]

const ServiceList = () => {

    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg="3" key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList;