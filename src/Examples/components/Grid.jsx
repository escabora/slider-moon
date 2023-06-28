import React from 'react';
import Slider from '../../Slider';
import moon from '../../images/moon.jpg';


const Grid = () => {
  const items = [0, 1, 2, 3, 4, 5];
  return (
      <Slider
        slideClass={'my-slider3'}
        infinite={true}
        bullets={true}
        arrowsNav={true}
        callback={() => {
          console.log('here grid');
        }}
      >
        <div>
          <div className='slider my-slider3'>
            <ul className='slider-wrapper'>
              {items.map((item) => (
                <li key={item} className='slider-grid'>
                  <img src={moon} />
                  <img src={moon} />
                  <img src={moon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Slider>
  );
};

export default Grid;
