import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
import mockGallery from './Galleryuser.json';
import './Interactive.css';
import axios from "axios";

const GallerySection = () => {
    const [galleryData, setGalleryData] = useState(mockGallery);
    useEffect(() => {
        axios.get("http://localhost:8000/api/showcase")
            .then((response) => {
                setGalleryData(prevData => [...prevData, ...response.data]); 
            })
            .catch((error) => {
                console.error("Không thể lấy dữ liệu từ API:", error);
            });
    }, []);

    return (
        <section>
            <Row>
                {galleryData.map((item, index) => (
                    <Col sm="12" md="6" lg="4" key={item.id || `placeholder-${index}`} className="mb-4">
                        <div style={{ backgroundColor: "wheat" }} className="wood-frame">
                            <div className="card">
                                <CardImg top width="100%" src={item.image} alt={item.title} />
                                <div className="card-body">
                                    <CardTitle tag="h5">{item.title}</CardTitle>
                                    <div className="card-text">
                                        <small>Style: {item.style}</small><br />
                                        <small>By: {item.author}</small><br />
                                        <small>{item.description}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <h3 className="text-center text-white">And many more... </h3>
        </section>
    )
};

export default GallerySection;
