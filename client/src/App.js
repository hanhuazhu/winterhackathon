import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

/* vv Change to whatever we decide on this route vv */
import Lookup from './Rxlookup';

/* All routes are extension components of the app component. App is running through BrowserRouter in index.js */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* BrowserRouter catches the request from the browser and re-renders the page without requesting a new DOM */}
        <div>
          <Routes>
            {/* These routes point assign an element to render. The elements are imported from each JS view file */}
            <Route exact path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/RxLookup' element={<Lookup />} />
            <Route path='/Signup' element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    )    
  }
}

export default App;
