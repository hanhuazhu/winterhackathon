import React from 'react';
import { Nav, Navbar, Container, Row, Col} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import logo from './logo_2.svg';
import Logout from './Logout';

function NavBar(props) {

  /* 
  Routes that require the navbar are rendered through here first. Outlet 
  (line 34) gives it a way to continue on to the correct path. This forces the 
  navbar on the side, and every other view is rendered in the container on the 
  right. 
  */
 
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
                      <Logout/>
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

export default NavBar; 