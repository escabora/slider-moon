[![Version](https://img.shields.io/npm/v/slider-moon.svg)](https://www.npmjs.com/package/slider-moon)
[![Downloads Total](https://img.shields.io/npm/dt/slider-moon.svg)](https://www.npmjs.com/package/slider-moon)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/escabora/slider-moon/blob/main/LICENSE.md)
[![CodeFactor](https://www.codefactor.io/repository/github/escabora/slider-moon/badge)](https://www.codefactor.io/repository/github/escabora/slider-moon)

# Slider Moon

<p align="center">
<img  width='450px' style='display:block; margin:0 auto;' src='https://raw.githubusercontent.com/escabora/slider-moon/main/examples/src/images/moon-flat-design.png' />
</p>

A slide plugin for react. The main focus was to build an accessible, high-performance and easy-to-install plugin. Feel free to explore and evolve my plugin.
[See the examples here](https://slider-moon.netlify.app/)


## Install

`$ npm i slider-moon`

or

`$ yarn add slider-moon`

## How to use

import the function `Slider` and css in your component.

```javascript
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'

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
            <img src={yourImage} />
          </li>
        ))}
      </ul>
    </div>
</Slider>
```
## Options

options can be passed as props to the `Slider` component. See below for the options and their description.

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th style="width: 100px;">Name</th>
			<th style="width: 100px;">type</th>
			<th style="width: 50px;">default</th>
			<th>description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>infinite</td>
			<td>bolean</td>
			<td>null</td>
			<td>determines whether the slider will be infinite when reaching the last item.</td>
		</tr>
    <tr>
			<td>bullets</td>
			<td>bolean</td>
			<td>null</td>
			<td>enable clickable bullets under the slider.</td>
		</tr>
    <tr>
			<td>arrowsNav</td>
			<td>bolean</td>
			<td>null</td>
			<td>enable arrows for slider navigation.</td>
		</tr>
    <tr>
			<td>animation</td>
			<td>string</td>
			<td>null</td>
			<td>name of animation for slider transition.</td>
		</tr>
    <tr>
			<td>callback</td>
			<td>func</td>
			<td>void</td>
			<td>function that triggers every time the slider is updated (resize and click to change slide).</td>
		</tr>
	</tbody>
</table>

## Contributing
If you have a pull request that you would like to submit, be sure to update the library version. Feel free to help and evolve the plugin.
## License

The code is available under the [MIT License](LICENSE.md).
