import React from 'react';
import BCard from './B-Card';
import './Business.css';
import B1 from './B-image/B1.jpg';
import B2 from './B-image/B2.jpg';
import B3 from './B-image/B3.jpg';
import {DiBingSmall} from 'react-icons/di';
import {DiAtom} from 'react-icons/di'
import {DiAptana} from 'react-icons/di'



const services = [
  {
    image: B1,
    logo: <DiBingSmall className = 'logosize' />,
    title: 'Municipalities/ Government',
    description: 'The perfect solution to provide modern conveniences to public communities while also promoting sustainability.',
  },
  {
    image: B2,
    logo: <DiAtom className='logosize'/>,
    title: 'Recreational',
    description: 'Our product finds its optimal usage in hotels, resorts, restaurants, and other hospitality settings with businesses offering an enriched experience to its customers driving them to engage with their brand.',
  },
  {
    image: B3,
    logo: <DiAptana className='logosize'/>,
    title: 'Commercial',
    description: 'The smart solar hub aspires to promote social consciousness and hence is an excellent choice for companies seeking to use their CSR funds and make a positive impact.',
  },
];

const Business = () => {
  return (
    <div className="Business" id='Business'>
      <div className="B-title"><h1><span>For </span><span style={{color: '#fb982f' }}>Business</span></h1></div>
      <div className='B-subtitle'>
         <h2>A Promise, a Vision for the 21st century.</h2>
      </div>
      <div className='B-summary'>
         <p>
         Our smart solar hub can be placed in open spaces, gardens, shopping malls, institutions, and retail venues to give visitors with an amazing experience and incentivize them to spend more time connecting with a brand. We can share new technologies and best practices with the larger community by making the outdoor experience pleasing and interactive. The smart solar hub's multiple features make it a practical and ecologically beneficial option for businesses and organizations' looking to enhance their spaces.
         </p>
      </div>
      

      <div className="service-container">
        {services.map((service, index) => (
          <BCard className = "service-block"
            key={index}
            image={service.image}
            logo = {service.logo}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Business;
