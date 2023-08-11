import React, {useState} from "react";
// import {SliderData} from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './ImageSlider.css';

import img1 from '../../Photo/img1.jpg';
import img2 from '../../Photo/img2.jpg';
import img3 from '../../Photo/img3.jpg';
import img4 from '../../Photo/img4.jpg';

//what is redux toolkit
//what is useState
//what is redux

const SliderData = [
  {img: img1},
  {img: img2},
  {img: img3},
  {img: img4}

]
const ImageSlider = () => {
  //slides

   
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;
    //slides
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
      return null;
    }
  
    return (
      
      <div className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
            console.log(slide);
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img src={slide.img} alt='travel image' className='image' />
              )}
            </div>
          );
        })}
      </div>
     
    );
  };
  
  export default ImageSlider;
