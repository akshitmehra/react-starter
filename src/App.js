import React from 'react';

import './App.scss';
import commute from './commute.png';

export default function App() {
  return (
    <div className="App">
      <p>react-starter</p>
      <img src={commute} alt="Store" />
    </div>
  );
}
