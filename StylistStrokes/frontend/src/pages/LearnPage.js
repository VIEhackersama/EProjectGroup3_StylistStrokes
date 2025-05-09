import React from "react";
import Learnlist from "../components/learnlist";
import "../styles/card.css";
import { motion } from "framer-motion";


function LearnPage() {

  
  return (
    <div className="py-3" style={{ backgroundImage:"url(https://img.freepik.com/free-photo/canvas-background-with-paint-texture_91008-505.jpg?semt=ais_hybrid&w=740)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    }}>
      <section
        className="text-white text-center py-5"
        style={{
          backgroundImage: "url('/image/title.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-light bg-opacity-75 p-5 rounded d-inline-block">
          <h2 className="display-4 fw-bold mb-3 text-black">
            Master the Art of Calligraphy
          </h2>
          <p className="lead mb-4 fw-bold text-black">
            Online calligraphy courses for beginners and advanced learners.
          </p>
          <a href="#courses" className="btn btn-warning btn-lg fw-semibold hover-effect">
            Explore Courses
          </a>
        </div>
      </section>

      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={ { opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{backgroundColor:"rgba(234, 224, 172, 0.8)"}}
      className="container text-center p-5">
        <h3>Hello everyone!</h3>

        <h3>
          Are you fascinated by the elegance of flowing, graceful strokes? Would
          you like to explore the art of calligraphy — where every line speaks
          emotion, and every letter tells a story?
        </h3>

        <h3>
          Join our <span className="highlight text-danger">Art of Calligraphy Course</span>,
          where you will:
        </h3>
        <ul className="list-unstyled h5">
          <li>
            Learn about the rich history and deep cultural meaning of
            calligraphy
          </li>
          <li>Master techniques from basic strokes to advanced layouts</li>
          <li>Create your own personal works of art with brush and ink</li>
        </ul>

        <h3>
          With experienced instructors and a creative, friendly environment,
          we’ll guide you step by step into the beauty of this timeless art
          form.
        </h3>

        <h3>
          Don’t miss the chance to nurture your soul, practice patience, and
          express yourself through every stroke.
        </h3>

        <p className="highlight text-danger">
          The Calligraphy Course – where your journey into the beauty of letters
          begins.
        </p>

        <div className="register">
          <p>
            <strong>
              Register today to reserve your spot and enjoy exclusive early-bird
              offers!
            </strong>
          </p>
          <div className="d-flex justify-content-center mt-4">
            <a href="#courses" className="btn btn-warning hover-effect">
              Start now
            </a>
          </div>
        </div>
      </motion.div>

      <section id="courses" className="container py-5">
        <h3 className="text-center fw-bold mb-5 display-6">Our Courses</h3>
        
        <Learnlist />
       
      </section>
    </div>
  );
}

export default LearnPage;
