import React from "react";
import logo from '../../Photo/logo.png';
import './LogoAnimation.css';


const  LogoAnimation = () => {
    return (
      <div className="logo-container">
        <img src={logo}  style ={{width: '287px' ,height: '100px'}} alt="Logo" className="logo-img" />
      </div>
    );
  }

  export default LogoAnimation;
