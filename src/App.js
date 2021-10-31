import React from 'react';
import logo from './logo.svg';
import './App.css';
import urlToLin from './lib/urlToLin';

function App() {
  const url = 'https://www.bridgebase.com/tools/handviewer.html?lin=st||pn|Periiz,jeank64,Damares%20C,tbattaggia|md|4SAQ7HK6DKT5CKJ543,SK65HA95DJ862C876,S942HT83DA43CAQT2,SJT83HQJ742DQ97C9|sv|n|rh||ah|Board%202|mb|P|mb|1N|mb|P|mb|3N|mb|P|mb|P|mb|P|pc|D2|pc|D3|pc|DQ|pc|DK|pc|C3|pc|C6|pc|CA|pc|C9|pc|CQ|pc|H2|pc|C4|pc|C7|pc|CT|pc|H4|pc|CK|pc|C8|pc|CJ|pc|D6|pc|C2|pc|D7|pc|C5|pc|H5|pc|H3|pc|D9|pc|DT|pc|D8|pc|D4|pc|S3|pc|D5|pc|DJ|pc|DA|pc|S8|pc|S2|pc|ST|pc|SA|pc|S5|pc|S7|pc|SK|pc|S4|pc|SJ|pc|HA|pc|H8|pc|H7|pc|H6|pc|H9|pc|HT|pc|HJ|pc|HK|pc|SQ|pc|S6|pc|S9|pc|HQ|'
  const url2 = 'https://www.bridgebase.com/tools/handviewer.html?lin=st||pn|,,,|md|3SKT86542HKDJ82CQ4,SQJ7H932DQ53CAJ76,S3HQJ854DAT97CK85,SA9HAT76DK64CT932|sv|o|rh||ah|Board%200|'
  const lin = urlToLin(url, 1);
  const lin2 = urlToLin(url2, 2);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> {lin} </p>
        <p> {lin2} </p>
      </header>
    </div>
  );
}

export default App;
