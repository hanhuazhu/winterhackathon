import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';

/* vv Change to whatever we decide on this route vv */
import Lookup from './Rxlookup';

/* All routes are an extension components of the app component. App is running through BrowserRouter in index.js */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/RxLookup' element={<Lookup />} />
          </Routes>
        </div>
      </BrowserRouter>
    )    

  }
}

export default App;
