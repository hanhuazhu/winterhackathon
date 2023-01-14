import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo_2.svg';
import { Component } from 'react';



class Login extends Component {
    render() {
        return (
            <Container className='window m-0 p-0' fluid>
                <Row className='h-100'>
                    <Col>
                        <img src={logo} alt="My Healthcare Logo" style={{width: 300, height: 100}}></img>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login