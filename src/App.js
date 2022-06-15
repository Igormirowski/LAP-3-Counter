import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  const someState = useState('hello')
  console.log(someState)

  const changeBg = () => {
    console.log('do something')
  }

  return (
    <div className="container vh-100" style={{backgroundColor: "saddlebrown"}}>
      <div className="d-flex justify-content-between">
        <div onMouseEnter={changeBg}>first div</div>
        <div>second div</div>
      </div>
    </div>
  );
}

export default App;
