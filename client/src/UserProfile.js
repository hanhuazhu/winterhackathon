import './UserProfile.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import React from 'react';
import { useState, useEffect } from 'react';

const UserProfile = props => {

    const [userSession, setdata] = useState(props);
    const [user, setUser] = useState({
        name: ''
    })

    useEffect(() => {fetch(`//localhost:3001/api/v1/user/${userSession.user}`)
        .then((response) => response.json())
            .then((data) => setUser(data.data)) }, [userSession]);

    return ( 
        <Container className='box m-0 p-0 mh-100' fluid>
            <Row className='h-100'> 
                <Col className='text-center align-items-center justify-content-center d-flex flex-column h-100'>
                    <Button 
                        href="/Article" 
                        variant='outline-dark' 
                        size='lg'
                        className='position-absolute top-0 end-0'>
                                Recommended Articles
                    </Button>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>
                                {user.firstName}
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

export default UserProfile