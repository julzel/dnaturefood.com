import React from 'react';

// local imports
import "./fonts.scss";
import './App.scss';
import dnatureLogo from "./assets/images/dnature-logo.png";
import Dna from './components/Dna';

const App = () => {
  return (
    <div className="page-under-construction">
      <div className="logo-wrapper">
        <img src={dnatureLogo} alt="DNAture logo" />
        <div className="temp" />
      </div>
      <Dna />
    </div>
  );
}
 
export default App;