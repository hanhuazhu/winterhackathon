import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import logo from './logo_2.svg';
import { Component } from 'react';


class Home extends Component {
    render() {
        return (
            <div>
                <Container className='homepage m-0 p-0' fluid>
                    <Row>
                        <Col className='p-2 ms-2 mt-2'>
                            <img src={logo} alt="My HealthCare Logo" id="logo"></img>
                        </Col>
                        <Col className='m-auto d-flex justify-content-evenly'>
                            <Button href="/Login" variant='outline-dark' size='lg'>
                                Login
                            </Button>
                            <Button href="/Signup" variant='outline-dark' size='lg'>
                                Signup
                            </Button>
                        </Col>
                    </Row>
                    <Row className='h-50 row-cols-2'>
                        <Col className='m-auto'>
                            <div className='text-center mx-auto w-50'>
                                <h1>Welcome to your health.</h1> <br />
                                <h4>Track your history, lifestyle, and symptoms to recieve curated wellness tips and 
                                    reminders to stay on top of your health.</h4><br /><br />
                                <Button href='/Drug' variant='outline-dark' size='lg'>
                                    Rx Lookup
                                </Button>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home