import React, { useState } from 'react';
import Default from './components/Default';
import Scale from './components/Scale';
import Grid from './components/Grid';
import Apresentation from './components/Apresentation';
import './styles.css'

const Examples = () => {
  const [dark, setDark] = useState(false)
  return (
    <div className={`${dark ? 'theme-light' : 'theme-dark'}`}>
      <header>
        <button onClick={() => setDark(!dark)}>Tema dark</button>
      </header>
      <Apresentation />
      <Default/>
      <Scale/>
      <Grid/>
    </div>
  );
};

export default Examples;
