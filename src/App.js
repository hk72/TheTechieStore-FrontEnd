import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Carousel from './components/carousel/carousel'

function App() {
  return (
    <div>
      <BrowserRouter >
        <Route exact path = '/' component = {Carousel}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
