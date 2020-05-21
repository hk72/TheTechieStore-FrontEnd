import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Carousel from './components/carousel/carousel'
import Browse from './components/browse/browse'

function App() {
  return (
    <div>
      <BrowserRouter >
        <Route exact path = '/' render = {props =>
          <div>
            <Carousel/>
            <Browse/>
          </div>
        }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
