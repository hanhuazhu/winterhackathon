import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo_2.svg';
import { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
        }
        
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.verifyPassword = this.verifyPassword.bind(this);
    }

    handleUsernameChange = (event) => {
        this.props.onUsernameChange(event.target.value)

    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleLogin = () => {
        this.props.onIsLoggedInChange(true)
    }

    verifyPassword = (data) => {
        console.log(data.data)
        console.log(this.state.password)
        if (data.data == null) {
            alert('Incorrect username or password');
            return false
        } else if (data.data.password != this.state.password) {
            alert('Incorrect username or password')
            return false
        } else {
            this.props.onIsLoggedInChange(true);
        }

    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        fetch(`http://localhost:3001/api/v1/user/${this.props.username}`)
                .then((response) => response.json())
                    .then((data) => {
                        return this.verifyPassword(data);
            })
    }

    render() {
        const username = this.props.username
        const userURL = `/UserProfile/${username}`
        return (
            <Container className='box m-0 p-0 mh-100' fluid>
                <Row className='h-100'> 
                    <Col className='text-center align-items-center justify-content-center d-flex flex-column h-100'>
                        {this.props.isLoggedIn && (
                            <Navigate to={userURL} replace={true} />
                        )}
                        <a href='/'>
                            <img src={logo} alt='My HealthCare Logo' width={300}></img>
                        </a>
                        <Form className='w-25'>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' placeholder='Enter username' autoComplete='username' value={username} onChange={this.handleUsernameChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter password' autoComplete='new-password' onChange={this.handlePasswordChange}/>
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

export default Login