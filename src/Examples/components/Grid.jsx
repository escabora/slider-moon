import React from 'react';
import Slider from '../../Slider';
import moon from '../../images/moon.jpg';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Grid = () => {
  const items = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <div className='container'>
        <h3>Grid</h3>
        <SyntaxHighlighter language='javascript' style={dracula}>
          {`
//- your style
.slider-grid {
  display: flex;
  justify-content: space-between;
}

//- your component
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
</Slider>`}
        </SyntaxHighlighter>
      </div>
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
      <div className='container'>
        <div className='divider'></div>
      </div>
    </>
  );
};

export default Grid;
