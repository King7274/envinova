import React, { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { config } from "react-spring";
import './3D-Carousel.css';
// import img1 from '../../Photo/img1.jpg'
// import img2 from '../../Photo/img2.jpg'
// import img3 from '../../Photo/img3.jpg'
// import img4 from '../../Photo/img4.jpg'
import img5 from '../../Photo/img2.jpg'
import img1 from '../../Photo/aa.jpg';
import img2 from '../../Photo/aa1.jpg';
import img3 from '../../Photo/aa2.jpg';
import img4 from '../../Photo/aa4.jpg';
import MB1 from '../../Photo/m1.jpg';
import MB2 from '../../Photo/m2.jpg';
import MB3 from '../../Photo/m3.jpg';
import MB4 from '../../Photo/m4.jpg';
import MB5 from '../../Photo/m2.jpg';

export const ThreeDCarousel = () => {
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
      };
      useEffect(() => {
        window.addEventListener("resize",updateScreenWidth);
        return () =>{
            window.removeEventListener("resize",updateScreenWidth);
        };
      },[]);

  let slides = [
    {
      content: <img src={ img1} alt="1" style={{ height: screenWidth < 450 ? '400px' :'800px', width: '800px'}} />,
      className: "carousel-image"
    },
    {
      content: <img src={ img2} alt="2" style={{height: screenWidth < 450 ? '400px' :'800px', width: '800px'}}/>,
      className: "carousel-image"
    },
    {
      content: <img src={img3} alt="3" style={{height: screenWidth < 450 ? '400px' :'800px', width: '800px'}} />,
      className: "carousel-image"
    },
    {
      content: <img src={ img4} alt="4" style={{height: screenWidth < 450 ? '400px' :'800px', width: '800px'}} />,
      className: "carousel-image"
    },
    {
      content: <img src={ img5} alt="5" style={{height: screenWidth < 450 ? '400px' :'800px', width: '800px'}} />,
      className: "carousel-image"
    },
    
  ].map((slide, index) => {
    return { ...slide,    //
      content: (
        <div className="carousel-image">
          {slide.content}
        </div>
      ),
      onClick: () => setState({ goToSlide: index }) };
  });

  const onChangeInput = (e) => { 
    setState({
      ...state,
      [e.target.name]: parseInt(e.target.value, 10) || 0,
      config: {
        ...state.config,
        duration: 500
      }
    });
  };

  let xDown = null;
  let yDown = null;

  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    );
  };

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState({ goToSlide: state.goToSlide + 1 });
      } else {
        /* right swipe */
        setState({ goToSlide: state.goToSlide - 1 });
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    // <div className="Craousel-Container">

    
    <div 
      style={{ width: "100%", height: screenWidth < 450 ? '250px' :'600px', alignItems:'center'}}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel 
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        // showNavigation={state.showNavigation}
        showNavigation= {true}
       
        animationConfig={state.config}
        na
      />
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
     
      </div>
    </div>
    // </div>
  );
};

export default ThreeDCarousel;

