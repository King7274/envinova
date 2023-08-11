import React, { useState, useEffect } from 'react';
import './Testimonial.css'; // Import the CSS file for styling
import expert1 from '../Leadership/assets/expert1.jpg';
import expert2 from '../Leadership/assets/expert2.jpg';
import {FaAngleLeft} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';
import LogoSlider from '../Brand/Brand';

const testimonialData = [
  {
    id: 1,
    name: 'Prof. YP Verma',
    title: 'Registrar, Panjab University',
    description: "I have had the pleasure of using and observing this product, and I can confidently say that it has the potential to revolutionize the industry.",
    image: expert1,
  },
  {
    id: 2,
    name: 'Dr Amit Agrawal',
    title: 'IAS',
    description: "It's a good innovation",
    image: expert2,
  },
  {
    id: 3,
    name: 'Hans-Jörg Hörtnagl',
    title: 'Trade Commissioner, Advantage Austria',
    description: "It's a step forward to create smart cities and enhance public comfort."
  }
  // Add more testimonial objects here
];

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Function to handle automatic testimonial rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const { name, title, description, image } = testimonialData[currentTestimonialIndex];

  const nextTestimonial = () =>{
    setCurrentTestimonialIndex((prevIndex) => (prevIndex+1)%testimonialData.length);
  }
  const previousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => prevIndex === 0 ? testimonialData.length-1 : prevIndex-1);
  }

  return (

    <div className='Testimonial' id='Testimonial'>
    <div className='title'>
    <h1><span>What Experts Say </span> <span style={{color: '#fb982f'}}>About Us</span></h1>
        
    </div>
    <div className="testimonial-container">
    
      <div className="testimonial">
        
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-title">{title}</p>
        <p className="testimonial-description">{description}</p>
      </div>
      <div className="testimonial-navigation">
        <div className="arrow-left" onClick={previousTestimonial}>
        <FaAngleLeft style={{fontSize: '4rem'}}/>
        </div>
        <div className="arrow-right" onClick={nextTestimonial}>
        <FaAngleRight  style={{fontSize: '4rem'}}/>
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonialData.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentTestimonialIndex ? 'active' : ''}`}
            onClick={() => setCurrentTestimonialIndex(index)}
          ></div>
        ))}
      </div>

      {/* <div className='brands'> */}
    {/* <div className='title'>
    <h1><span>Our </span> <span style={{color: '#fb982f'}}>Clients</span></h1>
    </div> */}
    <div >
    <LogoSlider/>
    </div>
      
    
    
    {/* </div> */}
    </div>

    
    </div>
  );
};

export default Testimonial;
