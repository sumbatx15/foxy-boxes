'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import ArrowBox from '../ArrowBox'

import './Plane.css'

const Plane = ({arrows, arrowComponent: ArrowComponent}) => {
  return (
    <div className='plane'>
      {(new Array(arrows)).fill(null).map((item, index) => (
        <ArrowComponent key={String(index)} />
      ))}
    </div>
  )
}

Plane.propTypes = {
  arrows: PropTypes.number,
  arrowComponent: PropTypes.elementType
}

Plane.defaultProps = {
  arrows: 9,
  arrowComponent: ArrowBox
}

export default Plane
