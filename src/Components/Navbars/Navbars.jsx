
import Toggle from '../Toggle/Toggle';
import './Navbars.css';
// import logo from '../../Imagess/logo.png';
import React from 'react';
import { useState } from 'react';
// import UilBars from '@iconscout/react-unicons/icons/uil-'
import {FiAlignJustify} from 'react-icons/fi';
import LogoAnimation from '../LogoAnimation/LogoAnimation';
import {Link} from 'react-scroll';






function Navbars() {

  const [IsNavExpanded,setIsNavExpanded] = useState(false);
  
  const closeNav = () => {
    setIsNavExpanded(false);
  };

  return (
    <div>
    <div className='n-wrapper' id='Navbars'>
    <div className='n-left'>
    <div className='n-logo'>
       <LogoAnimation/>
       {/* <img style = {{width: '287px' ,height: '134px'}}  */}
       {/* src={logo} alt='logo'></img> */}
    </div>
     {/* <Toggle/>  */}
        <button className='hamburger' onClick={ () => {
          setIsNavExpanded(!IsNavExpanded);
        }}>
         <FiAlignJustify style={{scale:'2'}}/>

        </button>
    </div>
    <div className='n-right' >

             <div className={IsNavExpanded ? 'expanded' : ''}>
           <div className= 'n-List'  >
           
           <ul style={{listStyleType: 'none'}}>
            <Link spy = {true} to = 'HomePage' smooth = {true} onClick={closeNav} >
            <li>Home</li>
            </Link>
            <Link spy = {true} to = 'Feature' smooth = {true} onClick={closeNav}>
            <li>Features</li>
                </Link>
                <Link spy = {true} to = 'Product' smooth = {true} onClick={closeNav}>
                <li>Products</li>
                </Link>
                <Link spy = {true} to = 'Project' smooth = {true} onClick={closeNav}>
                <li>Projects</li>
                </Link>
                <Link spy = {true} to = 'About' smooth = {true} onClick={closeNav}>
                <li>About</li>
                </Link>
                <Link spy = {true} to = 'Contact' smooth = {true} onClick={closeNav}>
                <li>Contact</li>
                </Link>
            
            
            {/* <li>Adevertise</li> */}
 
            
           </ul>
           </div>

           </div>
           <Link spy = {true} to = 'Contact' smooth = {true}>
           <button className='button'> Contact Us

                     </button>
           </Link>
           
    </div>

    </div>
    </div>
  )
}

export default Navbars