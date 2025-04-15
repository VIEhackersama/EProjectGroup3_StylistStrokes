import { Row, Col } from "react-bootstrap";
export default function Footer_2()
{
    return(
        <div>
        <hr className="border-secondary my-4"></hr>
        <div className="row">
            <Col md={6} className='text-center text-md-start mb-3 mb-md-0'>
                <p className="text-light opacity-75 small mb-0">
                &copy; {new Date().getFullYear()} StylistStrokes. All rights reserved.
                Calligraphy Art & Supplies.
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
                </a>3
            </Col>
        </div>
        </div>
    );
}