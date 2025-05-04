import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        style: "",
        description: "",
        image: null,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image") {
            const file = files[0];
            setFormData({ ...formData, image: file });
            setImagePreview(URL.createObjectURL(file));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        setSubmitted(true);
        setFormData({
            title: "",
            author: "",
            style: "",
            description: "",
            image: null,
        });
        setImagePreview(null);
    };

    return (
        
        <section style={{ backgroundColor:"#C9D6FF"}} className="p-4 shadow-sm rounded ">
            {submitted && <Alert color="success">Your calligraphy has been submitted!</Alert>}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <div className="form-label h3 pattaya-regular" for="title">Title</div>
                    <Input type="text" name="title" id="title" required value={formData.title} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <div className="form-label h3 pattaya-regular" for="author">Author</div>
                    <Input type="text" name="author" id="author" required value={formData.author} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <div className="form-label h3 pattaya-regular" for="style">Style</div>
                    <Input type="text" name="style" id="style" required value={formData.style} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <div className="form-label h3 pattaya-regular" for="description">Description</div>
                    <Input type="textarea" name="description" id="description" required value={formData.description} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <div for="image" className="form-label h3 pattaya-regular">Upload Image</div>
                    <Input type="file" name="image" id="image" accept="image/*" onChange={handleChange} />
                    {imagePreview && (
                        <div className="mt-3">
                            <img src={imagePreview} alt="Preview" className="img-fluid rounded shadow-sm" style={{ maxHeight: "300px" }} />
                        </div>
                    )}
                    <label className="p-2 form-check-label" htmlFor="acceptTos">
                        By submitting this form, you are confirming that we, as an orangization, have full authority in using and manage your provided media. Please refrain from sharing personal information. Learn more at <a className="fw-semibold" href="#">Terms and conditions</a>
                    </label>
                </FormGroup>
                <Button color="primary" type="submit">Submit</Button>
            </Form>
        </section>
    );
};

export default FeedbackForm;
