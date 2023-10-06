import React from "react";
import logo from '../../Photo/logo.png';
import './LogoAnimation.css';


const  LogoAnimation = () => {
    return (
        <img src={logo}  style ={{width: '287px' ,height: '68px'}} alt="Logo" className="logo-img" />
    );
  }

  export default LogoAnimation;
