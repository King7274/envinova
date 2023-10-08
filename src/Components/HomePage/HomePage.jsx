import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
// JSX
import HeroSlider, {
  Slide,
  ButtonsNav,
  Nav,
  Overlay
} from "hero-slider";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Subtitle from "./Subtitle";

// Images
import img1 from '../../Photo/d8.jpg';
import img2 from '../../Photo/d2.jpg';
import img3 from '../../Photo/d7.jpg';
import img4 from '../../Photo/d9.jpg';
import img5 from '../../Photo/d3.jpg';
import img6 from '../../Photo/d6.jpg';

import MB1 from '../../Photo/m3.jpg';
import MB2 from '../../Photo/m2.jpg';
import MB3 from '../../Photo/m1.jpg';
import MB4 from '../../Photo/m1.jpg';
import MB5 from '../../Photo/m5.jpg';
import MB6 from '../../Photo/m.jpg';

const HomePage = () => {

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

  return (

    <div className="HomePage" id="HomePage">

    
    <HeroSlider
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "#000",
        backgroundPosition: 'cover',
        color: 'white',
        backgroundSize: 'center'
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 100,
        height: "10vh",
        
        
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>A Future
                beyond
                    imagination</Title>
          <Subtitle>
          “Step into the future with Smart
           Solar Hub, a symbol of infinite
          solar potential where custom
          designed architecture meets
          technology”
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        navDescription="Hallstatt - Austria"
        background={{
          backgroundImage: `url(${screenWidth < 450 ? MB1 : img1})`,
          backgroundAnimation: "zoom",
          
          width: '100%',
          height: '100%',
          backgroundPosition: 'center',
          maskBackgroundBlendMode: '-moz-initial'
        }}
      />

      <Slide
        navDescription="Hvitserkur - Iceland"
        background={{
          backgroundImage:`url(${screenWidth < 450 ? MB2 : img2})`,
          backgroundAnimation: "zoom",
          width: '100%',
          height: '100%',
          backgroundPosition: 'center'
          
        }}
      />

      <Slide
        navDescription="Jacksonville - USA"
        background={{
          backgroundImage: `url(${screenWidth < 450 ? MB3 : img3})`,
          backgroundAnimation: "zoom",
          width: '100%',
          backgroundPosition: 'center',
          height: '100%'
        }}
      />

      <Slide
        navDescription="Moraine Lake - Canada"
        background={{
          backgroundImage: `url(${screenWidth < 450 ? MB4 : img4})`,
          backgroundAnimation: "zoom",
          width: '100%',
          height: '100%',
          backgroundPosition: 'center'
        }}
      />

       <Slide
        navDescription="Moraine Lake - Canada"
        background={{
          backgroundImage: `url(${screenWidth < 450 ? MB5 : img5})`,
          backgroundAnimation: "zoom",
          width: '100%',
          height: '100%',
          backgroundPosition: 'center'
        }}
      />

       <Slide
        navDescription="Moraine Lake - Canada"
        background={{
          backgroundImage: `url(${screenWidth < 450 ? MB6 : img6})`,
          backgroundAnimation: "zoom",
          width: '100%',
          height: '100%',
          backgroundPosition: 'center'
        }}
      />


      <ButtonsNav
        isNullAfterThreshold
        position={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: '70%',
          height: '70%',
          backgroundPosition: 'center'
        }}
      />
      <Nav />
     <div className="H-Button">
     <Link spy= {true} to = 'Contact' smooth = {true}>
     <button className="H-button">Contact</button>
     </Link>
     <Link spy= {true} to = 'Product' smooth = {true}>
     <button className="H-button">Product</button>
     </Link>
        
       
     </div>
    </HeroSlider>
    </div>
  );
};

export default HomePage;
