import React from 'react';
import './Feature.css';
import mainImage from './F-images/main-image.png';
import {useMotionValue,useTransform ,motion} from 'framer-motion';
import icon1 from './F-images/feature1.png'
import icon2 from './F-images/feature2.png'
import icon3 from './F-images/feature3.png'
import icon4 from './F-images/feature4.png'
import icon5 from './F-images/feature5.png'
import icon6 from './F-images/feature6.png'
import icon7 from './F-images/feature7.png'
import icon8 from './F-images/feature8.png'
import icon9 from './F-images/feature9.png'
import icon10 from './F-images/feature10.png'
import icon11 from './F-images/feature11.png'
import icon12 from './F-images/feature12.png'

const FeatureBox = ({ title, image }) => {
  return (
    <div className="feature-box">
      <div className="feature-box-icon">
        <img src= {image} alt='icon'/>
      </div>
      <div className="feature-box-title">{title}</div>
    </div>
  );
};

const Feature = () => {
  // Array of feature boxes

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y,[-100,100],[30,-30]);
  const rotateY = useTransform(x,[100,-100],[-30,30]);

  const featureBoxes = [
    { title: 'SAFE CHARGING PORTS FOR MOBILE & LAPTOP', image: icon1 },
    { title: 'Wi-Fi', image: icon2 },
    { title: 'SENSOR BASED LED LIGHTS', image: icon3 },
    {title: '360° CCTV SURVEILLANCE',image: icon4},
    {title: 'INFOTAINMENT SCREEN',image: icon5},
    {title: 'AUDIO SPEAKER for Announcements',image: icon6},
    {title: 'LIVE WEATHER MONITORING',image: icon7},
    {title: ' EMERGENCY SOS CALL',image: icon8},
    {title: 'ADVERTISEMENT BILLBOARD',image: icon9},
    {title: 'BENCHES TO RELAX',image: icon10},
    {title: 'ANTI-THEFT ALARM with 3-levels of security',image: icon11},
    {title: 'EV CHARGING for 2-Wheelers',image: icon12}
  ];

  return (

    <div className='feature' id='Feature'>
       <div className='f-first'>
     <div className="f-title"><h1><span>SMART </span><span style={{color: '#fb982f' }}>SOLAR HUB</span></h1></div>
       <div className='f-subtitle'><h2>“Step into the future with Smart Solar Hub, a symbol of infinite solar potential where custom-designed architecture meets technology.”</h2></div> 
       <div style={{perspective:2000}}>

        <motion.div 
        style={{x,y,rotateX,rotateY,z:100}}
        drag
        dragElastic={0.18}
        dragConstraints={{top: 0,left: 0, right: 0, bottom: 0}}
        whileTop={{cursor: 'grabbing'}}
        
        >
        <img src={mainImage} draggable ='false' className='f-image' alt="Large Image" />
        </motion.div>
        
       </div>
       </div>
      
      <div className='f-second'>
     <div className='f-title'> <h2 style={{color: '#fb982f',fontSize: '3rem'}}>Features</h2></div>
     <div className='box'>
        {featureBoxes.map((box, index) => (
            
          <FeatureBox key={index} 
          title={box.title} 
          image = {box.image} />
           
        ))}
        </div>
           
     
      </div>
        
      
    
     </div>

  );
};

export default Feature;