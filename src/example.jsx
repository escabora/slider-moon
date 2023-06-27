import Slider from './Slider';
import React from 'react';
import ReactDOM from 'react-dom/client';

import image1 from './images/foto1.jpg'
import image2 from './images/foto2.jpg'
import image3 from './images/foto3.jpg'
import image4 from './images/foto4.jpg'
import image5 from './images/foto5.jpg'
import image6 from './images/foto6.jpg'

ReactDOM.createRoot(document.getElementById('app')).render(
  <Slider infinite={true} bullets={true} arrowsNav={true} >
    <div>
      <div className='slide-wrapper slider-wrapper'>
        <ul className='slide slider'>
          <li>
            <img src={image1} />
          </li>
          <li>
            <img src={image2} />
          </li>
          <li>
            <img src={image3} />
          </li>
          <li>
            <img src={image4} />
          </li>
          <li>
            <img src={image5} />
          </li>
          <li>
            <img src={image6} />
          </li>
        </ul>
      </div>
    </div>
  </Slider>
);
