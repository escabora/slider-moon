import Slider from './Slider';
import React from 'react';
import ReactDOM from 'react-dom/client';

import moon from './images/moon.jpg';

const items = [0, 1, 2, 3, 4, 5];

ReactDOM.createRoot(document.getElementById('app')).render(
  <>
  <Slider
    slideClass={'my-slider1'}
    infinite={true}
    bullets={true}
    arrowsNav={true}
    callback={() => {
      console.log('here');
    }}
    animation={'scale'}
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

  <Slider
    slideClass={'my-slider2'}
    infinite={true}
    bullets={true}
    arrowsNav={true}
    callback={() => {
      console.log('here2');
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
  </>
);
