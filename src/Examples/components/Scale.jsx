import React from 'react';
import Slider from '../../Slider';
import moon from '../../images/moon.jpg';

const Scale = () => {
  const items = [0, 1, 2, 3, 4, 5];
  return (
      <Slider
        slideClass={'my-slider1'}
        infinite={true}
        bullets={true}
        arrowsNav={true}
        animation={'scale'}
        callback={() => {
          console.log('here scale');
        }}
      >
        <div>
          <div className='slider my-slider1'>
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

export default Scale;
