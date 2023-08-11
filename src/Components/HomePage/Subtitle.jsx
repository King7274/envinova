import React from 'react'
import PropTypes from 'prop-types'
// CSS
import './HomePage.css';

const subtitle = (props) => {
  return (
    <h2 className="ContainerSubtitle">
      {props.children}
    </h2>
  )
}

subtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default subtitle
