import './Signup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';



class Signup extends Component {
    render() {
        return (
            <Container className='window'>
                <Row>
                    <Col className='text-center'>
                        <Image src='logo_2.svg' />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Signup