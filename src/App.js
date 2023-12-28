
import React from 'react';
import './App.css';
import RouteCompo from './Route/Route';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RouteCompo/>
      </BrowserRouter>
    </div>
  );
}

export default App;
