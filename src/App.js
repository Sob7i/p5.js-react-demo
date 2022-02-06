import React from 'react';
import { ReactP5Wrapper } from "react-p5-wrapper";

import renderCanvas from './setup'
import './App.css';

function App() {

  return (
    <div className="App">
      <ReactP5Wrapper sketch={renderCanvas} />
    </div>
  );
}

export default App;
