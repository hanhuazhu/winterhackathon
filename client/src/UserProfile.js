import './UserProfile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

function UserProfile() {

    const [userdata, setdata] = useState();

        const params = useParams()
        console.log(params)
        useEffect(() => {fetch(`http://healthtracerapi.onrender.com/api/v1/user/${params.username}`)
            .then((response) => response.json())
                .then((data) => setdata(data)); }, [params]);

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
                            <Card.Title>First Name</Card.Title>
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