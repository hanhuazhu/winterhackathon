import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Drug from './Drug';
import Biometrics from './Biometrics';
import Signup from './Signup';
import Article from './Article';
import UserProfile from './UserProfile';
import NavBar from './Navbar';




/* All routes are extension components of the app component. App is running through BrowserRouter in index.js */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: ''
    }
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(username) {
    this.setState({username: username})
  }

  handleLoginChange(loggedIn) {
    this.setState({isLoggedIn: loggedIn})
  }
  render() {
    const username = this.state.username
    const isLoggedIn = this.state.isLoggedIn
    return (
      <BrowserRouter>
      {/* BrowserRouter catches the request from the browser and re-renders the page without requesting a new DOM */}
        <div>
          <Routes>
            {/* These routes assign an element to re-render that are imported from each JS view file */}
            <Route exact path='/' element={<Home />} />
            <Route path='/Login' element={<Login username={username} isLoggedIn={isLoggedIn} onIsLoggedInChange={this.handleLoginChange} onUsernameChange={this.handleUserChange} />} />
            <Route path='/Drug' element={<Drug />} />
            <Route path='/Signup' element={<Signup />} />
            <Route element={<NavBar />}>
              <Route path='/Biometrics' element={<Biometrics />} />
              <Route path='/UserProfile/:username'  element={<UserProfile username={username}/>} />
              <Route path='/Article' element={<Article />} />
            </Route>  
          </Routes>
        </div>
      </BrowserRouter>
    )    
  }
}

export default App;
