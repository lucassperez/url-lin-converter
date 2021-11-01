import React from 'react';
import logo from './logo.svg';
import './App.css';
import urlToLin from './lib/urlToLin';
import linToUrl from './lib/linToUrl'

function App() {
  const url = 'https://www.bridgebase.com/tools/handviewer.html?lin=st||pn|Periiz,~Mwest,~Mnorth,~Meast|md|3SA87HAT874DAJTCKT,SQT6HK53DKQ32CQJ2,SJ5HQJD754C976543,SK9432H962D986CA8|sv|n|rh||ah|Board%205|mb|P|mb|P|mb|1N|an|notrump%20opener.%20Could%20have%205M.%20--%202-5%20!C;%202-5%20!D;%202-5%20!H;%202-5%20!S;%2015-17%20HCP;%2018-%20total%20points|mb|P|mb|2N!|an|Minor%20transfer%20--%206+%20!C;%2011-%20HCP;%2012-%20total%20points|mb|P|mb|3C|an|Transfer%20completed%20--%202-5%20!C;%202-5%20!D;%202-5%20!H;%202-5%20!S;%2015-17%20HCP;%2018-%20total%20points|mb|P|mb|P|mb|P|pc|DK|pc|D4|pc|D6|pc|DA|pc|DT|pc|DQ|pc|D5|pc|D9|pc|D2|pc|D7|pc|D8|pc|DJ|pc|CT|pc|CJ|pc|C3|pc|C8|pc|C2|pc|C4|pc|CA|pc|CK|pc|SK|pc|SA|pc|S6|pc|S5|pc|S7|pc|SQ|pc|SJ|pc|S9|pc|CQ|pc|C5|pc|H2|pc|H4|pc|D3|pc|C6|pc|S4|pc|S8|pc|HJ|pc|H9|pc|H7|pc|HK|pc|H5|pc|HQ|pc|H6|pc|HA|mc|7|'
  const url2 = 'https://www.bridgebase.com/tools/handviewer.html?lin=st||pn|,,,|md|3SKT86542HKDJ82CQ4,SQJ7H932DQ53CAJ76,S3HQJ854DAT97CK85,SA9HAT76DK64CT932|sv|o|rh||ah|Board%200|'
  const lin = urlToLin(url, 1);
  const lin2 = urlToLin(url2, 2);
  const u = linToUrl(lin);

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
        <a href={u} target='_blank'>link</a>
      </header>
    </div>
  );
}

export default App;
