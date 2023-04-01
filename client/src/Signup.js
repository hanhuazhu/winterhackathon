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
            currentUser: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target
        this.setState({
            [target.name]: target.value
        });
    }

    verifyInput() {
        
        if (this.state.password !== this.state.confirmPassword) {
            alert('Passwords do not match');
            return false;
        }
        if (this.state.password.length < 8) {
            alert('Password must be 8 characters long');
            return false;
        }
    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        const creds = this.state;
        this.verifyInput();
        fetch('https://healthtracerapi.onrender.com/api/v1/user/  ',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(creds)
        })
        .then((response) => response.json())
            .then((data) => {
                if (data.status === "OK") {
                    let user = this.state.username;
                    let newBio = {"username":user}
                    fetch('https://healthtracerapi.onrender.com/api/v1/biometrics/',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newBio)
                    })
                    .then((user) => {
                        this.setState({currentUser: user});
                    })
                }
            })
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
                            <Navigate to='/Login' replace={true} />
                        )}
                        <Form className='w-25'>
                            <Form.Group className='mb-3' controlId='formBasicFirstName'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' name='firstName' placeholder='First Name' onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicLastName'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' name='lastName' placeholder='Last Name' onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicUsername'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' name='username' placeholder='Enter username' autoComplete='username' onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' name='password' placeholder='Enter password' autoComplete='new-password' onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
                                <Form.Label>Re-Enter Password</Form.Label>
                                <Form.Control type='password' name='confirmPassword' placeholder='Re-enter password' autoComplete='new-password' onChange={this.handleInputChange}/>
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