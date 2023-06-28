import React from 'react';
import Slider from '../../Slider';
import moon from '../../images/moon.jpg';

const Default = () => {
  const items = [0, 1, 2, 3, 4, 5];
  return (
    <Slider
    slideClass={'my-slider2'}
    infinite={true}
    bullets={true}
    arrowsNav={true}
    callback={() => {
      console.log('here');
    }}
  >
    <div>
      <div className='slider my-slider2'>
        <ul className='slider-wrapper'>
          {items.map((item) => (
            <li key={item}>
              <img src={moon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Slider>
  );
};

export default Default;
