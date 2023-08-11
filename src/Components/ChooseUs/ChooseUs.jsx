import React from 'react';
import './ChooseUs.css';
import {FaHandshake} from 'react-icons/fa'
import {FaCog} from 'react-icons/fa';
import {IoCheckmarkCircle} from 'react-icons/io5';
import {FaUserGear} from 'react-icons/fa6';
import { Link } from 'react-scroll';





const ChooseUs = () => {
  const cardData = [
    {
      icon: FaHandshake,
      title: 'TRUSTED PARTNER',
      description: 'Experience the ultimate outdoor transformation, backed by unrivaled expertise and setting new quality standards.'
      ,
    },
    {
      icon: FaCog,
      title: '360 SUPPORT',
      description: 'Embark on a seamless journey with our well-optimized product and dedicated assistance.',
    },
    {
      icon: IoCheckmarkCircle,
      title: 'DURABLE QUALITY',
      description: 'Crafted with the strongest materials, our low-maintenance, safety-enhanced solution ensures lasting outdoor experiences.'
      ,
    },
    {
      icon: FaUserGear,
      title: 'Customisable Sustainable Solution ',
      description: 'Experience a greener future with our eco-friendly innovations, offering tailored outdoor solutions designed just for you.'
    }
  ];

  return (
    <div className='ChooseUS' id='Choose-Us'>
    <div className="title"><h1><span>Why  </span><span style={{color: '#fb982f' }}>Choose US</span></h1></div>

    <div className='ChooseUS-Container'>

   
      {cardData.map((card, index) => (
        <div key={index} className=" C-card">
          <div className="C-icon">{React.createElement(card.icon)}</div>
          <div className='C-title'>
          <h2>{card.title}</h2>
          </div>
          <div className='C-description'>
          <p>{card.description}</p>
          
          </div>
        </div>
      ))}
      </div>
      <div className='Quate'>
      <div className='Q-left'>
         <h2>READY TO GET A SMART BENCH? TELL US MORE. WE'LL SEND THE BEST OPTION AND A QUATE</h2>
      </div>
      <div className='Q-right'>
      <Link spy = {true} to = 'Contact' smooth = {true}>
      <button className='Q-button'> Get Quate</button>
      </Link>
        
      </div>

      </div>
    </div>
  );
};

export default ChooseUs;


