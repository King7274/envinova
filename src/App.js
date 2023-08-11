// import logo from './logo.svg';
import React from 'react';
import  ReactDOM  from 'react-dom';
import Navbars from './Components/Navbars/Navbars';
import './App.css';
import Contact from './Components/Contact/Contact';
import Slider from './Components/Slider/Slider';
import Carsousel from './Components/Carousel/Carousel';
import ImageSlider from './Components/Slider1/ImageSlider';
import { SliderData } from './Components/Slider1/SliderData';
import About from './Components/About Us/About';
import Leadership from './Components/Leadership/Leadership';
import Testimonial from './Components/Testimonial/Testimonial';
import LogoSlider from './Components/Brand/Brand';
import Vertical3DCarousel from './Components/Project/Project';
import Project from './Components/Project/Project';
import ThreeDCarousel from './Components/3D-Carousel/3D-Carousel';
import Business from './Components/Business/Business';
import ProductPage from './Components/Product/Product';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Feature from './Components/Feature/Feature';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Headroom from 'react-headroom';






function App() {
  return (
  <div className='App'>
  <Headroom className='Headroom'>
  <Navbars/>
  </Headroom>
    
    <HomePage/>
    {/* <Carsousel/>  */}
    <Feature/>
    <Business/>
     <ProductPage/>
    
      <ChooseUs/>
      
       <Testimonial/>
       <Project/>
        <About/>
        <Leadership/>
         <Contact/>
         <Footer/>
       
   
    {/* <Slider/> */}
   
    {/* <Slider/> */}
    {/* <ImageSlider slides = {SliderData}/>; */}
   
    
   
    {/* <LogoSlider/> */}
    {/* <Vertical3DCarousel/> */}
     {/* <ThreeDCarousel/> */}
  
    
   
   
   
    
  </div>
    

  
  );
}

export default App;
