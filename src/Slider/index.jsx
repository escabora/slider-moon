import React, { useEffect } from 'react';
import './Slider.css'
import SliderNav from './Slider'


const Slider = ({ children, infinite, bullets, arrowsNav }) => {
  useEffect(()=> {
    const options = {
      slide: '.slider',
      wrapper: '.slider-wrapper',
      infinite,
      bullets,
      arrowsNav,
  };

    const sliderWithNav = new SliderNav(options);
    sliderWithNav.init();
  })

  return (children);
};

export default Slider;
