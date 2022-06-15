import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="container vh-100">
      <div className="d-flex justify-content-between">
        <div onMouseEnter={()=> console.log('do something')}>first div</div>
        <div>second div</div>
      </div>
    </div>
  );
}

export default App;
