import axios from "axios";
import { useState } from "react";
import "./font.css";
import "./contact.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        full_name: "",
        company_email: "",
        country: "",
        business_type: "",
        comments: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/form", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            alert("Form submitted successfully!");
            setFormData({
                full_name: "",
                company_email: "",
                country: "",
                business_type: "",
                comments: "",
            });
        } catch (error) {
            console.error(error);
            alert("Failed to submit the form.");
        }
    };

    return (
        <div className="container p-4">
            <form onSubmit={handleSubmit} className="form-container">
                <p className="mb-3 h5 fw-bolder text-danger">
                    * Each submission may take days for review. We recommend you to receive updates via email.
                </p>

                {[{ label: "Full Name", name: "full_name" },
                { label: "Email", name: "company_email", type: "email" }]
                    .map(({ label, name, type = "text" }) => (
                        <div className="mb-3" key={name}>
                            <label className="fw-semibold">{label}</label>
                            <input
                                type={type}
                                className="form-control"
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                required
                                placeholder="This field must not be left empty"
                            />
                        </div>
                    ))}

                <div className="mb-3">
                    <label className="fw-semibold">Country (Region)</label>
                    <select className="form-control" name="country" value={formData.country} onChange={handleChange} required>
                        <option>United States, Canada - North America</option>
                        <option>Vietnam, Thailand, Indonesia, Philippines, Malaysia - South East Asia</option>
                        <option>Japan, South Korea, Hong Kong - East Asia</option>
                        <option>India, Bangladesh, Sri Lanka - South Asia</option>
                        <option>United Kingdom, France, Germany, Spain, Turkiye - Europe</option>
                        <option>Brazil - South America</option>
                        <option>None of above countries or regions (please specify in below)</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="fw-semibold">What's your job or business type?</label>
                    <select className="form-control" name="business_type" value={formData.business_type} onChange={handleChange} required>
                        <option>Agency</option>
                        <option>Advertiser</option>
                        <option>Affiliate</option>
                        <option>Teacher</option>
                        <option>Student</option>
                        <option>I want to join the StylistStrokes team!</option>
                        <option>Other (please specify in below)</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="fw-semibold">How can we help? (Please provide enough and detailed information)</label>
                    <textarea
                        className="form-control"
                        rows="4"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="acceptTos"
                        id="acceptTos"
                        checked={formData.acceptTos}
                        onChange={handleChange}
                        required
                    />
                    <label className="form-check-label" htmlFor="acceptTos">
                        By submitting this form, you are agreeing to our <a className="fw-semibold" href="#">Terms of services</a> and our policy about personal information management. 
                    </label>
                </div>
                <div className="form-check mb-4">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="subscribe"
                        id="subscribe"
                        checked={formData.subscribe}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="subscribe">
                        I want to receive updates and promotions via email (Optional)
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
