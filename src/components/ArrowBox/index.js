'use strict'

import React from 'react'
import classNames from 'classnames'

import './ArrowBox.css'

const ArrowBox = ({className, direction, ...props}) => {
  return (
    <div className={classNames('arrow-box', direction, className)}>
      <div className='arrow' />
    </div>
  )
}

export default ArrowBox
