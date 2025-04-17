import Icon from "./../Footer/Icon";
import FooterList from "./../Footer/FooterList";
import { Col, Row } from "react-bootstrap";
export default function Footer_1() {
    return (
        <div>
            <Row className="gy-4 mb-5">
                <Col lg={3} md={6}>
                    <div className="mb-4">
                        <img src="https://media.discordapp.net/attachments/1356595631610663052/1356982354396188682/image.png?ex=6802524c&is=680100cc&hm=34ebfa33da2bce67c71e637147881273ebc0516c31605c3092799914bcf3aa87&=&format=webp&quality=lossless&width=550&height=232" height={45}></img>
                    </div>
                    <p className="text-light mb-4">
                        {" "}
                        Dedigitcated to preserving and promoting the beautiful art of
                        calligraphy through education, supplies, and community
                    </p>
                    <Icon></Icon>
                </Col>
                <Col lg={3} md={6}>
                    <h5 className="fw-bold mb-4">Links</h5>
                    <FooterList
                        a1="Home"
                        b1='https://google.com'
                        a2="About Us"
                        a3="Contact Us"
                        a4="Gallery"
                        a5="Blog"
                        a6="Shop"
                    ></FooterList>
                </Col>
                <Col lg={3} md={6}>
                    <h5 className="fw-bold mb-4">Resource</h5>
                    <FooterList
                        a1="Guides"
                        a2="Articles"
                        a3="Contact Us"
                        a4="Gallery"
                        a5="Blog"
                        a6="Shop"
                    ></FooterList>
                </Col>
                <Col lg={3} md={6}>
                    <h5 className="fw-bold mb-4">Opening Hours</h5>
                    <ul className="list-unstyled">
                        <li className="d-flex justify-content-between mb-2">
                            <span className="text-light opacity-75">Monday - Friday:</span>
                            <span className="text-white">9:00 AM - 6:00 PM</span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                            <span className="text-light opacity-75">Saturday:</span>
                            <span className="text-white">10:00 AM - 4:00 PM</span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                            <span className="text-light opacity-75">Sunday:</span>
                            <span className="text-white">Closed</span>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <h5 className="fw-bold mb-3">Map</h5>
                        
                    </div>
                </Col>
            </Row>
        </div>
    );
}
