import React from "react";
import HeroSlider ,{Slide,Nav,Overlay} from 'hero-slider';
import Wrapper from '../Carousel-Wrapper/Carousel-Wrapper';
import Title from '../CarouselTitle/CarouselTitle'
import Subtitle from "../CarouselSubtitle/CarouselSubtitle";
 import {TfiEmail} from 'react-icons/tfi';
 import './Carousel.css';

// import img1 from '../../Photo/envinova-image-1.jpg';
// import img1 from '../../Photo/img1.jpg';
// import img2 from '../../Photo/img2.jpg';
// import img3 from '../../Photo/img3.jpg';
// import img4 from '../../Photo/img4.jpg';

import img1 from '../../Photo/aa.jpg';
import img2 from '../../Photo/aa1.jpg';
import img3 from '../../Photo/aa2.jpg';
import img4 from '../../Photo/aa4.jpg';

const Carsousel = () =>{
  

    return(
      <div className="hero-slider">

      
        <HeroSlider className="Slide-Container"
        // slidingAnimation = 
       
      autoplay
      
        orientation = 'horizontal'
        initialSlide = {0}
        onBeforeChange = {(previousSlide,nextSlide) =>
        console.log('onBeforeChange',previousSlide,nextSlide)}
        onChange = {nextSlide => console.log('onChange',nextSlide)}
        onAfterChange={nextSlide => console.log('onAfterChange',nextSlide)}
        
        settings={{
            slidingDuration: 250,
            slidingDelay: 100,
            shouldAutoplay:true,
            shouldDisplayButtons: true,
            autoplayDuration: 250,
            height: '100%',

            breakpoints: {
              425: {
                shouldAutoplay: true,
                  height: '500px',
                  innerWidth: '30%',
                  outerWidth: '30%'
              }
                  
            }
            
        }}
        >
        {/* <OverlayContainer >
            <div className="slide-overlay">

            
        
            <Wrapper>
                <Title>Basic Slider</Title>
                <Subtitle>Slides' background attachment set to fixed</Subtitle>
            </Wrapper>
            </div>
        </OverlayContainer> */}
         {/* <Overlay> */}
          {/* <div className="slide-overlay">
            <div className="overlay-content">
              <Wrapper>
                <Title>Basic Slider</Title>
                <Subtitle>Description</Subtitle>
                <div className="overlay-buttons">
                  <button className="action-button">Button 1</button>
                  <button className="action-button">Button 2</button>
                </div>
              </Wrapper>
            </div>
            
            <div className="overlay-image">
              
              
              <img src={img1} alt="img"  />
            </div>
          </div> */}
           {/* </Overlay>  */}

         <div className="slides">
        <Slide className="image-slide"  style={{scale:'0.6',paddingBottom:'20%'}}
        background={{
          backgroundImage: `url(${img1 })`,
          backgroundAttachment:"fixed"
        }}
      />

      <Slide  className="image-slide" style={{scale:'0.6',marginBottom:'20%'}}
        background={{
          backgroundImage: `url(${img2})`,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide className="image-slide" style={{scale:'0.6',marginBottom:'20%'}}  
        background={{
          backgroundImage:`url(${img3})`,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide className="image-slide" style={{scale:'0.6',marginBottom:'20%'}}  
        background={{
          backgroundImage:`url(${img4})`,
          backgroundAttachment: "fixed"
        }}
      />
      </div>
     

        </HeroSlider>
        </div>
    )
}
export default Carsousel;