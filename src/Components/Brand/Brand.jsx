import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import brand1 from '../../Photo/brand1.png';
import brand2 from '../../Photo/brand2.png';
import brand3 from '../../Photo/brand3.png';
import brand4 from '../../Photo/brand4.jpg';
import brand5 from '../../Photo/brand5.png';


import './Brand.css';

const LogoSlider = () => {
  const settings = {
    className: 'center',
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return(
    <div  id='Brand'>
     <div className='title'>
    <h1><span>Our </span> <span style={{color: '#fb982f'}}>Clients</span></h1>
    </div>
        
        <Slider {...settings} className='Container'>
          <div className='brand'>
          <div className='brand-image'>
            <img src={brand1} alt='brand'/>
          </div>
          <div className='brand-name'>
            <h3>PU CHD</h3>
            </div>
          </div>

          <div className='brand'>
          <div className='brand-image'>
          <img src={brand2} alt='brand'/>
          </div>
          <div className='brand-name'>
            <h3>IFM Mohali</h3>
          </div>
           
          </div>

          <div className='brand'>
          <div className='brand-image'>
            <img src={brand3} alt='brand'/>
          </div>
          <div className='brand-name'>
            <h3>IIT Ropar</h3>
          </div>
          
          </div>

          <div className='brand'>
          <div className='brand-image'>
            <img src={brand4} alt='brand'/>
          </div>
          <div className='brand-name'>
            <h3>SDACH,CHD</h3>
          </div>
          </div>
            

          <div className='brand'>
          <div className='brand-image'>
            <img src={brand5} alt='brand'/>
          </div>
          <div className='brand-name'>
            <h3>DC Mohali</h3>
          </div>
            
          </div>

          <div className='brand'>
          <div className='brand-image'>
            <img src={brand3} alt='brand'/>
          </div>
          <div className='brand-name'>
            <h3>IIT Ropar</h3>
          </div>
           
          </div>
        </Slider>
      </div>
    );
  


}


  export default LogoSlider;