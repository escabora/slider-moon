import React from 'react';
import Slider from '../../../../src/Slider';
import moon from '../../images/moon.jpg';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const NoBullets = () => {
  const items = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <div className='container'>
        <h3>No Bullets</h3>
        <SyntaxHighlighter language='javascript' style={dracula}>
{`<Slider
  slideClass={'my-slider-no-bullets'}
  infinite={true}
  bullets={false}
  arrowsNav={true}
>
  <div>
    <div className='slider my-slider-no-bullets'>
      <ul className='slider-wrapper'>
        {items.map((item) => (
          <li key={item}>
            <img src={moon} />
          </li>
        ))}
      </ul>
    </div>
  </div>
</Slider>`}
        </SyntaxHighlighter>
      </div>

      <Slider
        slideClass={'my-slider-no-bullets'}
        infinite={false}
        bullets={false}
        arrowsNav={true}
      >
        <div>
          <div className='slider my-slider-no-bullets'>
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

export default NoBullets;
