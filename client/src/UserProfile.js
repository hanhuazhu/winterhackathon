import './UserProfile.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function UserProfile() {

    const navigate = useNavigate()
    const loggedIn = useSelector((state) => state.userSession.isLoggedIn)
    console.log(loggedIn)
    const [userdata, setdata] = useState('');

        const params = useParams()
        useEffect(() => {fetch(`//localhost:3001/api/v1/user/${params.username}`)
            .then((response) => response.json())
                .then((data) => setdata(data))
                    .then((data) => console.log(data)) }, [params]);
    
    const notLoggedIn = () => {
        navigate('/Login')
    }
    if (loggedIn === false) {
        return(
            <div onLoad={notLoggedIn}></div>
        )
    }
    else {
        return (

            <Container className='box m-0 p-0 mh-100' fluid>
                <Row className='h-100'> 
                    <Col className='text-center align-items-center justify-content-center d-flex flex-column h-100'>
                        <Button href="/Article" variant='outline-dark' size='lg'>
                                    Recommended Articles
                        </Button>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>
                                    {userdata.length > 2 && userdata.data.firstName}
                                    </Card.Title>
                                <Card.Text>
                                    Information about the Profile of the User
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='text-center align-items-center justify-content-center d-flex flex-column h-100'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Biometrics Card</Card.Title>
                                <Card.Text>
                                    Biometrics information
                                </Card.Text>
                                <Button href='/Biometrics' variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default UserProfile