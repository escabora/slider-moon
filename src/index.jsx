import React from 'react'
import MySlider from './Slider'

const Slider = ({...props}, children) => {
  return <MySlider {...props}>{children}</MySlider>
}

export default Slider;
