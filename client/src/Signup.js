import './Signup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import { Component } from 'react';
import logo from './logo_2.svg';
import { Navigate } from 'react-router-dom';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmPassword: '',
            currentUser: null
        }
        
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConPasswordChange = this.handleConPasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFNameChange = (event) => {
        this.setState({firstName: event.target.value})
    }

    handleLNameChange = (event) => {
        this.setState({lastName: event.target.value})
    }


    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleConPasswordChange = (event) => {
        this.setState({confirmPassword: event.target.value})
    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            alert('Passwords do not match');
            return false;
        } else {
            if (this.state.password.length < 8) {
                alert('Password must be 8 characters long');
                return false;
            } else {
                const data = this.state;
                fetch('http://localhost:3001/api/v1/user',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                .then(() => {
                    let user = this.state.username;
                    this.setState({currentUser: user});
                }
                )
            }
        }
    }

    render() {
        return (
            <Container className='box m-0 p-0 mh-100' fluid>
                <Row className='h-100'> 
                    <Col className='text-center align-items-center justify-content-center d-flex flex-column h-100'>
                        <a href='/'>
                            <img src={logo} alt='My HealthCare Logo' width={300}></img>
                        </a>
                        {this.state.currentUser && (
                            <Navigate to="/UserProfile" replace={true} />
                        )}
                        <Form className='w-25'>
                            <Form.Group className='mb-3' controlId='formBasicFirstName'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' placeholder='First Name' onChange={this.handleFNameChange} />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicLastName'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' placeholder='Last Name' onChange={this.handleLNameChange} />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicUsername'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' placeholder='Enter username' autoComplete='username' onChange={this.handleUsernameChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password' autoComplete='new-password' onChange={this.handlePasswordChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
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