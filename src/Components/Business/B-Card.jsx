import React from 'react';
import {DiAtom} from 'react-icons/di'
import {DiAptana} from 'react-icons/di'
import {DiBingSmall} from 'react-icons/di'
import './Business.css'

const BCard = ({ image,logo, title, description }) => {
  return (
    
   
    <div className="service-block">
      <img src={image} alt="Service" />
      <div className='B-logo' >{logo}</div>
      <h3>{title}</h3>
      <p>{description}</p>

    </div>
    
  );
};

export default BCard;