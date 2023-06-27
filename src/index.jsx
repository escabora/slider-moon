import React from 'react'
import Slider from './Slider'

const MySlider = ({...props}, children) => {
  return <Slider {...props}>{children}</Slider>
}

export default MySlider;
