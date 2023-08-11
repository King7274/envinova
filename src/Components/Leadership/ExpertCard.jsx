import React from 'react';
import { useState } from 'react';
import './Leadership.css';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaShareAlt} from 'react-icons/fa';
import {FaWhatsappSquare} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa6';

const ExpertCard = ({ image, name, designation,whatsapp }) => {

     const [Share, setShare] = useState(false);
     function check(){
          setShare(!Share);
     }

     function linkedin(){
         
     }
  return (
    <div className="expert-card">
    <div className='expert-img'>
    <img src={image} alt={name} />
    </div>
    <div className= {Share ? 'expert-link': 'expert-link1'}>
    {/* <ul className={Share ? 'expert-social': 'expert-social1'}>
        <li>
            <a href='www.facebook.com'>
            <FaFacebook style={{fontSize: '2rem',color: 'gray'}}/>
            </a>
        </li>
        <li>
            <a href='http://www.linkedin.com'>
                <FaInstagramSquare style={{fontSize: '2rem',color: 'gray'}}/>
            </a>
        </li>
        <li>
            <a href='http://www.twitter.com'>
                <FaLinkedin style={{fontSize: '2rem',color: 'gray'}}/>
            </a>
        </li>
    </ul> */}
    <button className='share-button' onClick={linkedin}>
        
          <FaLinkedinIn style={{fontSize: '2.5rem',alignItems:'center',marginTop:'0.7rem'}}/>
          
    </button>

    </div>
      <div className='expert-content'>
      <h3 className='expert-name'>{name}</h3>
      <span className='expert-degi'>{designation}</span>
      {/* <div className='expert-number'>
      <div >
      <FaWhatsappSquare style={{fontSize: '3rem',gap: '2rem',color: 'green'}}/>
      </div>
      <div style={{alignItems: 'center',marginTop: '1rem'}}><span style={{alignItems: 'center'}}>{whatsapp}</span>
      </div>
      
      

      </div> */}
      </div>
    </div>
  );
}

export default ExpertCard;
