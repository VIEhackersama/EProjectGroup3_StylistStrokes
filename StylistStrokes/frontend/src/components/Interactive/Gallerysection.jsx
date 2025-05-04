import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Row, Col } from "reactstrap";
import mockGallery from './Galleryuser.json';
import './Interactive.css';

const GallerySection = () => {
    return (
        <section>
            <Row>
                {mockGallery.map((item) => (
                    <Col sm="12" md="6" lg="4" key={item.id} className="mb-4">
                        <div style={{backgroundColor:"wheat"}} className="wood-frame">
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
    );
};

export default GallerySection;
