import { Row, Col } from "react-bootstrap";
export default function Footer_2() {
    return (
        <div>
            <hr className="border-secondary my-4"></hr>
            <div className="row">
                <Col md={6} className='text-center text-md-start mb-3 mb-md-0'>
                    <p className="text-light opacity-75 small mb-0">
                        &copy; 2025 StylistStrokes. All rights reserved.
                    </p>
                </Col>
                <Col md={6} className="text-center text-md-end">
                    <a href="#" className="text-light opacity-75 text-decoration-none small me-3 hover-text-danger">
                        Terms of Service
                    </a>
                    <a href="#" className="text-light opacity-75 text-decoration-none small me-3 hover-text-danger">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-light opacity-75 text-decoration-none small hover-text-danger">
                        Sitemap
                    </a>
                </Col>
            </div>
        </div>
    );
}