import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./components/Bio.css";

import {PhotoText} from './components/Bio';
import {Header} from "./components/Header";
import {Contact} from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <body>
        <PhotoText text={"bio.txt"} image={"profilePic.png"} imageOnRight={false}/>
        <div className="contact">
          <Contact />
        </div>
        <div className="contact">
          <p>(In Development)</p>
        </div>
      </body>
    </div>
  );
}

export default App;
