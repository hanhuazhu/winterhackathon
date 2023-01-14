import './Signup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import logo from './logo_2.svg';



class Signup extends Component {
    render() {
        return (
            <Container className='window m-0 p-0' fluid>
                <Row>
                    <Col className='m-auto'>
                        <img src={logo} alt="My Healthcare Logo"></img>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Signup