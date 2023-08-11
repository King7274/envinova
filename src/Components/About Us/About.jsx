import React from "react";
import './About.css';
import {FiTrendingUp} from 'react-icons/fi';
import {FaRadiation} from 'react-icons/fa';
import aboutImage from '../../Photo/img2.jpg';

const About = () =>{

    return(

        <div className="ContainerAbout" id="About">
        <div className="title"><h1><span>About </span><span style={{color: '#fb982f' }}>Us</span></h1></div>
        <div className="A-description">
          <p>
          Envinova Smartech strives to provide the highest quality solar energy services. We seek to create a market comprised of a close-knit society with long-term ambitions. The unequivocal need of the hour is to act on the principles of having a sustainable present and therefore establishing the prospect of a healthy future.
          </p>
        </div>

        <div className="Wrapper">
        <div className="left">
        
             <img className = 'left-img' src={aboutImage}  alt=""/>
        
              
        </div>
        <div className="right">
              <div className="Mission">
              <div className="M-left">

              
                <div div className="M-title">Mission</div>
                <p>At Envinova, we aim at improving public interaction in outdoor spaces by providing them with accessible energy and connectivity. We enhance the urban living experience by bringing technology to popular public areas, making cities more livable, sustainable and intelligent.</p>
                </div>
                <div className="M-right">
                    <div className="M-icon">
                      <FaRadiation style={{fontSize: '11rem', textAlign: "center",top: '5rem'}}/>
                    </div> 
                </div>
                </div>

                <div className="Vision">
                <div className="V-left">

                
                <div className="V-title">Vision</div>
                   <p>Incorporating change today to secure a tomorrow
                   Incorporating change today to secure a tomorrow</p>
                   </div>
                   <div className="V-right">
                         <div className="M-icon">
                          <FiTrendingUp style={{fontSize: '11rem',textAlign: 'center',top: '5rem'}}/>
                         </div>
                   </div>
                </div>
              </div>
        </div>

        </div>

       
    )
}

export default About;