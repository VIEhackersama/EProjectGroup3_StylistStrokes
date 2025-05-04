import React from "react";
import GallerySection from "../components/Interactive/Gallerysection";
import FeedbackForm from "../components/Interactive/Galleryform";

const InteractivePage = () => {
    return (
        <div style={{
            backgroundImage:"linear-gradient(to right, #ffa17f, #00223e)",

        }}>
            <div className="position-relative vw-100 d-flex flex-column justify-content-center align-items-center">
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundImage: `url(https://woed.com/wp-content/uploads/CAHOF-Hall-of-Fame-Featured-Image-2000x1330.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        filter: "brightness(50%)",
                        zIndex: 1,
                    }}
                ></div>
                <div className="position-relative text-center" style={{ zIndex: 2 }}>
                    <img
                        style={{ filter: "invert(100%)", width: "50%" }} 
                        className="p-3 img-fluid"
                        src="/image/logo1.png"
                        alt="Logo"
                    />
                    <a
                        href=""
                        className="btn btn-inf my-4 px-5 btn-lg"
                        style={{ borderRadius: "30px" }}
                    >
                        <label style={{ color: "wheat" }}>THE TRUE GALLERY</label>
                    </a>
                </div>
            </div>
        <div className="container py-4">
                <h1 className="mb-4 text-center text-white montserrat-nobro  ">The StylistStrokes Hall of Fame, but it is for everyone!</h1>
                <h5 className="mb-4 text-center text-white montserrat-nobro ">Share your artistic creations with the world and let them shine.
                   <br></br> Or simply your favorite calligraphy piece that you have made or seen.
                   <br></br> Or basically anything, maybe jusy a mild improvement that you think is worth sharing with the world.

                </h5>
            <GallerySection />
            <hr className="my-5 text-white" />
                <h1 className="text-white mb-4 text-center montserrat-nobro ">It's your turn now! Don't let the world miss out</h1>
            <FeedbackForm />
        </div>
        </div>
    );
};

export default InteractivePage;
