import './Login.css';
import { React, useState } from 'react';
import { Row, Col, Container, Button, Form}  from 'react-bootstrap';
import logo from './logo_2.svg';
import { useDispatch } from 'react-redux';
import { loginUser } from './UserSlice';
import { useNavigate } from 'react-router-dom';

const Login = props => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

 
    const handleInput = event => {
        event.target.name === 'username' ? 
            setUsername(event.target.value) : setPassword(event.target.value)
        }


    const handleSubmit = event => {
        const loginCreds = {
            username: username,
            password: password
        }

        event.preventDefault();
        fetch('https://healthtracerapi.onrender.com/api/v1/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginCreds)
        })
            .then((response) => response.json())
                .then((data) => {
                    if (data.status === 'OK') {
                        dispatch(loginUser(username));
                        navigate(`/UserProfile/${username}`)
                    }
                    else {
                        alert(data.data)
                        return false;
                    }
            })
    }
    return (
        <Container 
            className='box m-0 p-0 mh-100' 
            fluid>
            <Row className='h-100'> 
                <Col className= 'text-center align-items-center justify-content-center d-flex flex-column h-100'>
                    <a href='/'>
                        <img 
                            src={logo} 
                            alt='My HealthCare Logo' 
                            width={300}>
                        </img>
                    </a>
                    <Form className='w-25'>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formUsername'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type='text' 
                                name='username' 
                                placeholder='Enter username' 
                                autoComplete='username' 
                                value={username}
                                onChange={handleInput}/>
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type='password' 
                                name='password' 
                                placeholder='Enter password' 
                                autoComplete='new-password' 
                                onChange={handleInput}/>
                        </Form.Group>
                        <Button 
                            variant='info' 
                            type='submit' 
                            onClick={handleSubmit}>Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}                        

export default Login
