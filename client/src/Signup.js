import './Signup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import { Component } from 'react';
import logo from './logo_2.svg';



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {

        event.preventDefault()

        if (event.target.value !== this.state.password) {
            alert('Passwords do not match');
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <Container className='window m-0 p-0 mh-100' fluid>
                <Row className='h-100'> 
                    <Col className='text-center align-items-center justify-content-center d-flex flex-column h-100'>
                        <img src={logo} alt='My HealthCare Logo' width={300}></img>
                        <Form className='w-25' action='POST'>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' placeholder='Enter username' />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password'/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formConfirmPassword'>
                                <Form.Label>Re-Enter Password</Form.Label>
                                <Form.Control type='password' placeholder='Re-enter password' />
                            </Form.Group>
                            <Button variant='info' type='submit' onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Signup