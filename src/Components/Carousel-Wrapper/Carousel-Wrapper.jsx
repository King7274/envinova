import React from 'react'
import PropTypes from 'prop-types'
// CSS
import './Carousel-Wrapper.css';
function Wrapper(props) {
  return (
    <div className='Container'>
      {props.children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    
    PropTypes.object,
    PropTypes.element
  ])
}

export default Wrapper
