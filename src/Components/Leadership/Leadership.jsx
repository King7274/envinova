import ExpertCard from './ExpertCard';
import ExpertImage1 from './assets/expert2.jpg';
import ExpertImage2 from './assets/expert1.jpg';

import './Leadership.css';


function Leadership() {

  var link1 = 'linkedin.com'
  return (
    <div className="Leadership" id='Leadership'>
      <header className='L-tital'>
        <h1><span>Meet </span> <span style={{color: '#fb982f'}}>Our Experts</span></h1>
        <div style={{color: 'gray'}}><h3>Leadership</h3></div>
        
      </header>
      <div className='L-body'>
       
            <div className='L-left'>
          <ExpertCard
           
            image={ExpertImage1}
            name={'Arjun Mittal'}
            designation={'CEO'}
            whatsapp={'+919872230560'}
            link = {link1}
            
          />
          </div>
          <div className='L-right'>
          <ExpertCard
            
            image={ExpertImage2}
            name={'Ishank Bansal'}
            designation={'COO'}
            whatsapp={'+919877262993'}
            link = {link1}
          />

          </div>
       
      </div>
    </div>
  );
}

export default Leadership;
