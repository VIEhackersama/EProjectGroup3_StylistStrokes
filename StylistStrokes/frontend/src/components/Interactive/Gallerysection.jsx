import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
import mockGallery from './Galleryuser.json';
import './Interactive.css';
import axios from "axios";
import { motion } from "framer-motion";
const GallerySection = () => {
    const [galleryData, setGalleryData] = useState(mockGallery);
    useEffect(() => {
        axios.get("http://localhost:8000/api/showcase")
            .then((response) => {
                setGalleryData(response.data);
            })
            .catch((error) => {
                console.error("Couldn't fetch data from Laravel", error);
            });
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <Row>
                {galleryData.map((item, index) => (
                    <Col sm="12" md="6" lg="4" key={item.id || `placeholder-${index}`} className="mb-4">
                        <div style={{ backgroundColor: "wheat" }} className="wood-frame">
                            <div className="card">
                                <CardImg top width="100%" src={item.image} alt={item.title} />
                                <div className="card-body">
                                    <CardTitle tag="h2">"{item.title}"</CardTitle>
                                    <div className="card-text">
                                        <h2 className="tagesschrift-regular fw-semibold">{item.author}</h2>
                                        <h3>Style: {item.style}</h3><br />
                                        <h5 className="montserrat-nobro">{item.description}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
                {mockGallery.map((item, index) => (
                    <Col sm="12" md="6" lg="4" key={item.id || `placeholder-${index}`} className="mb-4">
                        <div style={{ backgroundColor: "wheat" }} className="wood-frame">
                            <div className="card">
                                <CardImg top width="100%" src={item.image} alt={item.title} />
                                <div className="card-body">
                                    <CardTitle tag="h2">"{item.title}"</CardTitle>
                                    <div className="card-text">
                                        <h2 className="tagesschrift-regular fw-semibold">{item.author}</h2>
                                        <h3>Style: {item.style}</h3><br />
                                        <h5 className="montserrat-nobro">{item.description}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <h3 className="text-center text-white">This seems like you have reached the end. You can click the button on the top of the side to see more content </h3>
        </motion.section>
    )
};

export default GallerySection;
