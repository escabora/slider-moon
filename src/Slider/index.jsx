import React, { useEffect } from 'react';
import './Slider.css';
import SliderNav from './Slider';

const Slider = ({ children, infinite, bullets, arrowsNav, callback }) => {
  useEffect(() => {
    const options = {
      slide: '.slider',
      wrapper: '.slider-wrapper',
      infinite,
      bullets,
      arrowsNav,
      callback,
    };

    const slider = new SliderNav(options);
    slider.init();
  }, []);

  return children;
};

export default Slider;
