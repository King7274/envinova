import React from 'react';
// import ProductCard from './ProductCard';
import './Product.css';
import product1 from './P-image/product1.jpg';
import product2 from './P-image/product2.jpg';
import product3 from './P-image/product3.jpg';
import { useState } from 'react';


const ProductPage = () => {

const [box , setbox] = useState(false);
const [selectedCard,setSelectedCard] = useState(null);

const productData = [
  {
    Id: 1,
    title: 'Style(0.5KW)',
    subtitle:'Price: Rs 1,12,000',
    image:  product1,
    
    
  },
  {
    Id: 2,
    title: 'Signature(1KW)',
    subtitle:'Price: Rs 1,90,000',
    image:  product2,
    
    

    
  },
  {
   Id: 3,
    title: 'EV Charhing Station',
    subtitle:'Price: Rs 3,05,000',
    image:  product3,
    
  },
]

const Description = [
  {
    Id: 1,
    title: 'Style(0.5KW)',
    f1: '8 Secure Mobile Charging ports',
      f2:'2 Wireless Charging pads',
       f3:'Auto ON/OFF LED Lights',
      
       f4:'CCTV',
       f5:'Inbuilt Wi-Fi',
      f6:'Backlit Billboard',
      
      
       f7:'Emergency SOS',
       f8:'Anti-thef Alarm'
    
  },
  {
    Id: 2,
    title: 'Signature(1KW)',

    f1: '10 Secure Mobile Charging ports',
      f2:'2 Wireless Charging pads',
       f3:'4 Laptop Charging Ports',
       f4:'Auto ON/OFF LED Lights',
      f5: '32-inch non-touch Fetail Screen',
       f6:'CCTV',
       f7:'Inbuilt Wi-Fi',
      f8:'Backlit Billboard',
      f9:'Live Weather Monitoring Screen',
       f10:'Audio Speaker',
       f11:'Emergency SOS',
       f12:'Anti-thef Alarm'
    
  },
  {
    Id: 3,
    title: 'EV Charging Station',
    f1: '4 Secure Mobile Charging ports',
      f2:'3-EV charging Socket for 2-wheelers',
      
       f3:'Auto ON/OFF LED Lights',
     
       f4:'CCTV',
       f5:'Inbuilt Wi-Fi',
      f6:'Backlit Billboard',
    
       f7:'Emergency SOS',
       f8:'Anti-thef Alarm'
    
  }
]

  
  const DetailCard = () => {
    
    const [showCard, setShowCard] = useState(true);
  
    // Rest of the component logic goes here
  
    return (
        <div>

      
        {showCard && selectedCard && box === true && (
          {/* <div className="Detail-Card">
          <div className='Detail-left'>
          <h3>{selectedCard.title}</h3>
          <img src={selectedCard.image} alt="Service" />
          </div>
          <div className='Detail-right'>
             
          <h2>Features</h2>
      <p>{selectedCard.description}</p>
            <button className='detail' onClick={() => (setShowCard(false), setbox(!box))}>X</button>
          </div>


          </div> */},
          {/* <div style={{position: 'absolute',zIndex:'1'}}> */},

          <div className='detail-container'>
          <div className="detail-card">
      <div className="left-section">
        <img src={selectedCard.image} alt={selectedCard.title} />
        <h1>{selectedCard.title}</h1>
        {/* <h1>{selectedCard.Id}</h1> */}
      </div>
      <div className="right-section">
         <h3>Features</h3>

         {Description.map((item)=>(
          <div key={item.Id}>
          {selectedCard.title === item.title ? (
            <ul>
            <li>{item.f1}</li>
            <li>{item.f2}</li>
            <li>{item.f3}</li>
            <li>{item.f4}</li>
            <li>{item.f5}</li>
            <li>{item.f6}</li>
            <li>{item.f7}</li>
            <li>{item.f8}</li>
            <li>{item.f9}</li>
            <li>{item.f10}</li>
            <li>{item.f11}</li>
            <li>{item.f12}</li>
          </ul>
          ): ""}
          
          </div>
         ))}
      
        {/* <ul>
       {productData[selectedCard].description.map((features,index) => (
                  
                  <li key={index}>{features}</li>
        )

        )} 
        </ul> */}

      </div>
      <button className="close-button" onClick={() => (setShowCard(false) , setbox(!box))}>X</button>
    </div>
    </div>
            
      
    //</div>
        )}

        </div>

    );
  };

  const ProductCard = ({ image,title,subtitle }) => {

  

    return (
      <div className="product-block">
      {/* <div className='p-button'> */}
      
      {/* </div> */}
    
        <div className="product-image">
          <img src={image} alt={image} />
        </div>
        <div className="product-title">{title}</div>
        {/* <div className='product-subtitle'>{subtitle}<span style={{fontSize:'15px' , color: '#fb982f',marginLeft:'5px'}}>    +18% GST  </span></div> */}
        <button className='details' onClick={() => (setSelectedCard({image,title,subtitle}),setbox(!box))} >
       <h3>View Detail</h3>
   </button>
      </div>
      
    );
  };
 



 
  return (
    <div className='Product-Container' id = "Product">
    
    <div className="P-title"><h1><span>Product </span><span style={{color: '#fb982f' }}>Varients</span></h1></div>
    <div className='P-subtitle'>
         <h2>The solar hub comes in 4 different variants based on size, capacity and features</h2>
      </div>
    
    <div className="product-page">
      { productData.map((product,index) => (
        
      //  setCount(index),

         <ProductCard className = "Product-block"
         key={product.index} 
         image = {product.image}
         title={product.title}
         subtitle={product.subtitle}
        //  onClick = {() => setCount(index) }
        
         />

      )) }

      { box === true && selectedCard && ( 
        

        <DetailCard className='Product-block' style= {{backgroundColor:'black'}}
        //     key={selectedCard.index} 
        //  image = {selectedCard.image}
        //  title={selectedCard.title}
        //  subtitle={selectedCard.subtitle}
        // description = {selectedCard.description}
      />
      
      ) }
     
    </div>
    </div>
    
  );
};

export default ProductPage;
