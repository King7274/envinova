import React from 'react'
import PropTypes from 'prop-types'
// CSS
import './CarouselSubtitle.css'

const Subtitle = (props) => {
  return (
    <h2 className='Container'>
      {props.children}
    </h2>
  )
}

Subtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default Subtitle