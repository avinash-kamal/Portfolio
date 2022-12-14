import './App.css';
import profileImage from './about-image.jpg'
import {useEffect, useState} from "react";
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

    return () => {};
  }, [index]);

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
      <div className="about-me">
        <div className="about-me-wrapper">
          <div className="image-container">
            <img src={profileImage} alt="About"/>
          </div>
          <div>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis consequuntur cum deleniti
              distinctio, eius est, harum illum in maiores minima nam obcaecati odio optio, perferendis perspiciatis
              praesentium quos reprehenderit.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid asperiores aut commodi cumque dolor,
              dolore error fugiat illum inventore itaque magnam maiores non quibusdam quo rem repudiandae saepe vel?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
