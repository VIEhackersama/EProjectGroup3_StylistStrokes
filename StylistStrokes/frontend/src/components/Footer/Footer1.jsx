import Icon from "./../Footer/Icon";
import FooterList from "./../Footer/FooterList";
import logo from "../../assets/images/logoss.png";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Footer_1() {
    const [dateTime, setDateTime] = useState("");
    const [location, setLocation] = useState("Unknown Location");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setDateTime(now.toLocaleString());
        };

        updateTime(); 
        const interval = setInterval(updateTime, 1000); 
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                    );
                    const data = await response.json();
                    setLocation(data.address.city || data.address.town || data.address.state || "Unknown Location");
                } catch {
                    setLocation("Location unavailable");
                }
            });
        }

        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <Row className="gy-4 mb-5">
                <Col lg={3} md={6}>
                    <div className="mb-4">
                        <img src={logo} style={{ filter: "invert(100%" }} height={100}></img>
                    </div>
                    <p className="text-light mb-4">
                        {" "}
                        Dedigitcated to preserving and promoting the beautiful art of
                        calligraphy through education, supplies, and community
                    </p>
                    <Icon></Icon>
                </Col>
                <Col lg={3} md={6}>
                    <h5 className="h2 fw-bolder mb-4 tagesschrift-regular">Navigation</h5>
                    <FooterList
                        a1="Home"
                        b1='/home'
                        a2="Gallery"
                        b2='/gallery'
                        a4="Showcase"
                        b4='/showcase'
                        a5="About Us"
                        b5='/about'
                        a6="Contact"
                        b6='/contact'
                        a3="Learn"
                        b3="learn"
                    ></FooterList>
                </Col>
                <Col lg={3} md={6}>
                    <h5 className="h2 fw-bolder mb-4 tagesschrift-regular">Resource</h5>
                    <FooterList
                        a1="Guides"
                        b1='/contact'
                        a2="Calligraphy information"
                        b2='/gallery'
                        a3="Post your work"
                        b3='/showcase'
                        a4="How to join our team?"
                        b4='/about'
                        a5="Forms"
                        b5='/contact'
                        a6="Shop"
                        b6='/home'
                    ></FooterList>
                </Col>
                <Col lg={3} md={6}>
                    <h5 className="h2 fw-bolder mb-4 tagesschrift-regular">Customer Care</h5>
                    <ul className="list-unstyled">
                        <li className="d-flex justify-content-between mb-2">
                            <span className="text-light opacity-75">Monday - Saturday:</span>
                            <span className="text-white">9:00 AM - 6:00 PM</span>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                            <span className="text-light opacity-75">Email:</span>
                            <a className="text-white">styliststrokes@customercare.com</a>
                        </li>
                        <li className="d-flex justify-content-between mb-2">
                            <span className="text-light opacity-75">Phone:</span>
                            <span className="text-white">(+84) 234 567 890</span>
                        </li>
                    </ul>
                    <div className="scroll-ticker mt-4">
                        <div className="scroll-text">
                             {dateTime} |  {location}
                        </div>
                    </div>
                    {/* <div className="mt-4">
                        <h5 className="fw-bold mb-3">Info</h5>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between mb-2">
                                <span className="text-light opacity-75">CEO:</span>
                                <span className="text-white">Dong Pham</span>
                            </li>
                        </ul>
                    </div> */}
                </Col>
            </Row>
        </div>
    );
}
