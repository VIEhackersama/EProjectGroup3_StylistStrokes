import members from './crew.json'
import './aboutcrew.css'
import { SlSocialInstagram, SlSocialFacebook, SlSocialReddit } from "react-icons/sl";
import { useState, useRef, useEffect } from 'react';
import { FaFacebook } from 'react-icons/fa6';
export default function Aboutcrew() {
    const [visible, setVisible] = useState(new Array(members.length).fill(false));
    const imageRefs = useRef([]);
    imageRefs.current = members.map((_, i) => imageRefs.current[i] || null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const updatedVisible = [...visible];
                entries.forEach(entry => {
                    const index = imageRefs.current.indexOf(entry.target);
                    if (entry.isIntersecting && !visible[index]) {
                        updatedVisible[index] = true; 
                    }
                });
                setVisible(updatedVisible);
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        imageRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => {
            imageRefs.current.forEach(el => el && observer.unobserve(el));
        };
    }, [visible]);
    return (
        <div className="container my-5 align-items-cente border"
        style={{borderColor:"brown"}}>
            {members.map((member, index) => (
                <div style={{ backgroundColor:"#e8d4ca"}} className="border p-3 row align-items-center mb-5" key={index}>
                    <div className={`col-md-4 ${index % 2 === 0 ? '' : 'order-md-2'}`}>
                        <img
                            ref={el => (imageRefs.current[index] = el)}
                            src={member.image}
                            alt={member.name}
                            className={`img-fluid rounded shadow image-animate ${visible[index] ? 'visible' : ''}`}
                        />
                    </div>
                    <div className="col-md-8">
                        <h2 className='playwrite-cu p-2'>{member.name}</h2>
                        <h6 className="text-muted">{member.role}</h6>
                        <p className='fw-semibold'>{member.description}</p>
                        <p>Contact:</p>
                        <a href="https://facebook.com" className="text-black h3 me-3 social-icons" style={{textDecoration:"none"}}><FaFacebook size={50} /><>{member.fbdesc}</></a>
                        <a href="https://facebook.com" className="text-black h3 me-3 social-icons" style={{ textDecoration: "none" }}><SlSocialInstagram size={50} /><>{member.instadesc}</></a>
                        <a href="https://facebook.com" className="text-black h3 me-3 social-icons" style={{ textDecoration: "none" }}><SlSocialReddit size={50} /><>{member.redditdesc}</></a>
                    </div>
                </div>
            ))}
        </div>
    );
};