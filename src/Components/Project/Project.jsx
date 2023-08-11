import React from "react";
import './Project.css';
import ThreeDCarousel from "../3D-Carousel/3D-Carousel";


const Project = () =>{



    return(

        <div className="Project" id="Project">
        <div className="P-title">
         <h1><span>Recent </span> <span style={{color: '#fb982f'}}>Project</span></h1>
        </div>
        <div className="P-Container">

      
        <div className="P-description">
           <p>
           Explore our Smart Solar Hub and witness the remarkable fusion of solar energy and contemporary design in a custom-built structure designed for public use and convenience. Immerse yourself in the elegance and efficiency of renewable energy firsthand, and experience the future of sustainable solutions.
           </p>
        </div>
        <div className="P-slider">
             <ThreeDCarousel className= 'ThreeDCarousel'/>
        </div>

        </div>
        </div>
    )
}

export default Project;