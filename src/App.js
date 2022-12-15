import './App.css';
import profileImage from './about-image.jpg'
import {useEffect, useState} from "react";
import {Instagram, LinkedIn} from '@mui/icons-material';

const delay = 10000
const carouselContent = [
  {
    question: "Hi, I'm",
    answer: "Avinash Kamal"
  },
  {
    question: "I'm from Vizag",
    answer: "A Web Developer"
  }
]

const App = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
    };
  }, [index]);

  const handleDownload = () => {
    console.log("File download clicked")
  }

  return (
    <div className="main-wrapper">
      {/* NAVIGATION SECTION */}
      <div className="navigation">
      </div>
      <div className="landing-page">
        <div className="carousel">
          <div
            className="carousel-container"
          >
            {
              carouselContent.map((slide, slideIndex) => (
                <div className={`slide${slideIndex === index ? ' active' : ''}`} key={slideIndex}>
                  <span>{slide.question.toUpperCase()}</span>
                  <h1>{slide.answer.toUpperCase()}</h1>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-wrapper">
          <img src={profileImage} alt="About"/>
          <div className={"about-content"}>
            <h2 className={"about-heading large-heading"}>ABOUT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis consequuntur cum deleniti
              distinctio, eius est, harum illum in maiores minima nam obcaecati odio optio, perferendis perspiciatis
              praesentium quos reprehenderit.
            </p>
            <button
              onClick={handleDownload}
              style={{
                cursor: "pointer",
                border: "none",
                outline: "none",
                color: "#0653df",
                background: "none",
                fontSize: "16px",
                marginTop: "1rem"
              }}>
              CHECK OUT MY RESUME
            </button>
            <div className="social-media-container">
              <div className="social-media-link">
                <LinkedIn/>
              </div>
              <div className="social-media-link">
                <Instagram/>
              </div>
            </div>
            <div className="contact-info-container" style={{marginTop: "1rem"}}>
              <h3 style={{color: "#FFF"}}>Contact me here!</h3>
              <p>
                Email: <a target={"_blank"} href="mailto:kamalavinash26@gmail.com" rel={"noreferrer"}
                           style={{textDecoration: "none", color: "#0653DFFF"}}>kamalavinash26@gmail.com</a>
              </p>
              <p style={{marginTop: "1rem"}}>
                Phone: <a href="tel:+918978299800"
                          style={{textDecoration: "none", color: "#0653DFFF"}}>+91 8978299800</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
