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
                <Container className='window m-0 p-0' fluid>
                    <Row className="row-cols-2">
                        <Col className='p-0 ms-2 mt-2'>
                            <img src={logo} alt="My HealthCare Logo" id="logo"></img>
                        </Col>
                        <Col>
                            <Button href="/Login" variant='dark-outline'>
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home