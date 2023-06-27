import Slider from './Slider';
import React from 'react';
import ReactDOM from 'react-dom/client';

import moon from './images/moon.jpg'

const items = [0,1,2,3,4,5]

ReactDOM.createRoot(document.getElementById('app')).render(
  <Slider infinite={true} bullets={true} arrowsNav={true} >
    <div>
      <div className='slide-wrapper slider-wrapper'>
        <ul className='slide slider'>
          {items.map(item => <li key={item}>
            <img src={moon} />
          </li>)}
        </ul>
      </div>
    </div>
  </Slider>
);
