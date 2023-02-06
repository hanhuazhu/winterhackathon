import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Drug from './Drug';
import Biometrics from './Biometrics';
import Signup from './Signup';
import Article from './Article';
import UserProfile from './UserProfile';
import NavBar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: ''
    }
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(user) {
    this.setState({currentUser: user})
  }

  handleLoginChange(loggedIn) {
    this.setState({isLoggedIn: loggedIn})
  }
  render() {
    const username = this.state.currentUser
    const isLoggedIn = this.state.isLoggedIn
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route 
              exact path='/' 
              element={<Home />} />
            <Route 
              path='/Login' 
              element= { 
                <Login 
                  username={username} 
                  isLoggedIn={isLoggedIn} 
                  onIsLoggedInChange={this.handleLoginChange} 
                  onUsernameChange={this.handleUserChange} />} />
            <Route 
              path='/Drug' 
              element={<Drug />} />
            <Route 
              path='/Signup' 
              element={<Signup />} />
            <Route element={<NavBar />}>
              <Route 
                path='/Biometrics' 
                element={<Biometrics />} />
              <Route 
                path='/UserProfile/:username'  
                element={<UserProfile username={username}/>} />
              <Route 
                path='/Article' 
                element={<Article />} />
            </Route>  
          </Routes>
        </div>
      </BrowserRouter>
    )    
  }
}

export default App;
