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
        
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConPasswordChange = this.handleConPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleConPasswordChange = (event) => {
        this.setState({confirmPassword: event.target.value})
    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        console.log(this.state.confirmPassword, this.state.password)
        if (this.state.password !== this.state.confirmPassword) {
            alert('Passwords do not match');
            return false;
        } else {
            if (this.state.password.length < 8) {
                alert('Password must be 8 characters long');
                return false;
            } else {
                fetch
                return true;
            }
        }
    }

    render() {
        return (
            <Container className='window m-0 p-0 mh-100' fluid>
                <Row className='h-100'> 
                    <Col className='text-center align-items-center justify-content-center d-flex flex-column h-100'>
                        <img src={logo} alt='My HealthCare Logo' width={300}></img>
                        <Form className='w-25'>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' placeholder='Enter username' autoComplete='username'/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password' autoComplete='new-password' onChange={this.handlePasswordChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formConfirmPassword'>
                                <Form.Label>Re-Enter Password</Form.Label>
                                <Form.Control type='password' placeholder='Re-enter password' autoComplete='new-password' onChange={this.handleConPasswordChange}/>
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