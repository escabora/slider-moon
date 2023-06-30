[![Version](https://img.shields.io/npm/v/slider-moon.svg)](https://www.npmjs.com/package/slider-moon)
[![Downloads Total](https://img.shields.io/npm/dt/slider-moon.svg)](https://www.npmjs.com/package/slider-moon)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/escabora/slider-moon/blob/main/LICENSE.md)
[![CodeFactor](https://www.codefactor.io/repository/github/escabora/slider-moon/badge)](https://www.codefactor.io/repository/github/escabora/slider-moon)

# Slider Moon

A slide plugin for react. The main focus was to build an accessible, high-performance and easy-to-install plugin. See examples of usage below. Feel free to explore and evolve my plugin.

[See the examples here](https://slider-moon.netlify.app/)

## Install

`$ npm i slider-moon`

or

`$ yarn add slider-moon`

## How to use

import the function `Slider` and css in your component.

```javascript
import Slider from 'slider-react-plugin';
import 'slider-react-plugin/dist/style.css'

<Slider
  slideClass={'my-slider'}
  infinite={true}
  bullets={true}
  arrowsNav={true}
  animation={'scale'}
  callback={() => {
    console.log('here');
  }}
>
    <div className='slider my-slider'>
      <ul className='slider-wrapper'>
        {items.map((item) => (
          <li key={item}>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </li>
        ))}
      </ul>
    </div>
</Slider>
```


## License

The code is available under the [MIT License](LICENSE.md).
