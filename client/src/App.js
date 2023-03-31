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
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const App = () => {

  const currentUser = useSelector((state) => state.userSession.currentUser)
  const isAuth = useSelector((state) => state.userSession.isLoggedIn)

  const [userSession, setUser] = useState({
    user: '',
    isLoggedIn: false,
    loading: true
  })

  useEffect(() =>{
    setUser({
      user: currentUser,
      isLoggedIn: isAuth,
      loading: false
    })} ,[currentUser, isAuth])
  
  
  return(
      <BrowserRouter>
        <div>
          <Routes>
            <Route 
              exact path='/' 
              element={<Home />} />
            <Route 
              path='/Login' 
              element= {<Login/>} />
            <Route 
              path='/Drug' 
              element={<Drug />} />
            <Route 
              path='/Signup' 
              element={<Signup />} />
            <Route 
              element={<NavBar {...userSession}/>}>
              <Route 
                path='/Biometrics' 
                element={<Biometrics />} />
              <Route 
                path='/UserProfile/:username'  
                element={<UserProfile {...userSession} />} />
              <Route 
                path='/Article' 
                element={<Article />} />
            </Route>  
          </Routes>
        </div>
      </BrowserRouter>
    )    
}


export default App;
