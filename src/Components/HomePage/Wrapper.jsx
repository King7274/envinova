import React from 'react'
import PropTypes from 'prop-types'
// CSS
import './HomePage.css';

const wrapper = (props) => {
  return (
    <div className='ContainerWrapper'>
      {props.children}
    </div>
  )
}

wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.element
  ])
}

export default wrapper
