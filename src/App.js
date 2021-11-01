import React, { useState } from 'react';
import './App.css';

import urlToLin from './lib/urlToLin'

function App() {
  const [urlInput, setUrlInput] = useState('');
  const [linOutput, setLinOutput] = useState('');

  const convertUrlToLin = () => {
    const urls = urlInput.split('\n');
    const lins =
      urls.reduce((acc, url, idx) => acc + urlToLin(url, idx + 1) + '\n', '');
    setLinOutput(lins);
  }

  return (
    <div className='App'>
      <h1>
        Converta entre LIN e urls do BBO
      </h1>
      <textarea
        style={{ width: '95%' }}
        rows='10'
        value={urlInput}
        onChange={e => setUrlInput(e.target.value)}
      ></textarea>
      <br/>
      <textarea
        style={{ width: '95%' }}
        rows='10'
        value={linOutput}
        onChange={e => setLinOutput(e.target.value)}
      ></textarea>
      <br/>
      <input
        type='button'
        value='LIN!'
        onClick={e => convertUrlToLin()}
      />
    </div>
  );
}

export default App;
