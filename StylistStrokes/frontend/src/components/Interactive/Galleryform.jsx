import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Alert } from "reactstrap";
import axios from "axios";

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        style: "",
        description: "",
        image: "", // chỉ là URL string
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/api/showcase", formData);
            setSubmitted(true);
            setFormData({
                title: "",
                author: "",
                style: "",
                description: "",
                image: "",
            });
            setError("");
        } catch (err) {
            console.error("Error sending content", err);
            setError("Error occured. Try again later");
        }
    };

    return (
        <section style={{ backgroundColor: "#9eb6f7" }} className="p-4 shadow-sm rounded">
            {submitted && <Alert color="success">Your post has been made successfully!</Alert>}
            {error && <Alert color="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <div className="form-label h3 pattaya-regular">Title</div>
                    <Input type="text" name="title" required value={formData.title} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <div className="form-label h3 pattaya-regular">Author</div>
                    <Input type="text" name="author" required value={formData.author} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <div className="form-label h3 pattaya-regular">Style</div>
                    <Input type="text" name="style" required value={formData.style} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <div className="form-label h3 pattaya-regular">Description</div>
                    <Input type="textarea" name="description" required value={formData.description} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <div className="form-label h3 pattaya-regular">Image URL</div>
                    <Input type="url" name="image" placeholder="https://example.com/image.jpg" value={formData.image} onChange={handleChange} />
                    {formData.image && (
                        <div className="mt-3">
                            <img src={formData.image} alt="Preview" className="img-fluid rounded shadow-sm" style={{ maxHeight: "300px" }} />
                        </div>
                    )}
                </FormGroup>
                <FormGroup>
                    <label className="p-2 form-check-label">
                        By submitting this form, you agree we may use your media. Learn more at <a href="#">Terms and Conditions</a>.
                    </label>
                </FormGroup>
                <Button className="btn-inf" type="submit">Submit</Button>
            </Form>
        </section>
    );
};

export default FeedbackForm;
