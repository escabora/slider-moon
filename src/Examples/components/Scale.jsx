import React from 'react';
import Slider from '../../Slider';
import moon from '../../images/moon.jpg';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Scale = () => {
  const items = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <div className='container'>
        <h3>Scale Animation</h3>
        <SyntaxHighlighter language='javascript' style={dracula}>
{`<Slider
  slideClass={'my-slider1'}
  infinite={true}
  bullets={true}
  arrowsNav={true}
  animation={'scale'}
  callback={() => {
    console.log('here scale');
  }}
>
  <div className='slider my-slider1'>
    <ul className='slider-wrapper'>
      {items.map((item) => (
        <li key={item}>
          <img src={moon} />
        </li>
      ))}
    </ul>
  </div>
</Slider>`}
        </SyntaxHighlighter>
      </div>
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
      <div className='container'>
        <div className='divider'></div>
      </div>
    </>
  );
};

export default Scale;
