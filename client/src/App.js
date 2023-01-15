import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Drug from './Drug';
import Biometrics from './Biometrics';
import Signup from './Signup';
import Article from './Article';
import User from './UserProfile';
import { Nav, Navbar, Container, Row, Col} from 'react-bootstrap';
import logo from './logo_2.svg';


function NavBar(props) {
  /* Routes that require the navbar are rendered through here first. Outlet (33) gives it a way to continue on to the correct path. This forces the 
  navbar on the side, and every other view is rendered in the container on the right. */
  return (
    <div>
      <Container className='h-100vh m-0 p-0' fluid>
        <Row className='row-cols-2 h-100'>
          <Col className='col-2 bg-dark text-center py-4'>
              <Navbar className=' flex-column w-100 h-100 py-3'>
                  <a href='/'>
                    <img src={logo} alt='My HealthCare Logo' style={{width: 150, height: 75}}></img>
                  </a>
                    <Nav className='d-flex flex-column col-2 bg-dark text-center w-100 mh-100 gap-4'>
                      <Nav.Link href='/Drug' id='navlink' className='text-info fw-bolder my-5 fs-3'>Drug Information</Nav.Link>
                      <Nav.Link href='#' id='navlink-white' className='text-white fw-bolder mt-5 fs-3'>Logout</Nav.Link>
                    </Nav>
              </Navbar>
          </Col>
          <Col className='col-10 p-0 m-0'>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  )
};

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
              <Route path='/UserProfile' element={<User username={username}/>} />
              <Route path='/Article' element={<Article />} />
            </Route>          </Routes>
        </div>
      </BrowserRouter>
    )    
  }
}

export default App;
