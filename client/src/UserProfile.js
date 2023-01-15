import './UserProfile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React from 'react';



function UserProfile() {
    return (
        <Container className='box m-0 p-0 mh-100' fluid>
            <Row className='h-100'> 
                <Col className='text-center align-items-center justify-content-center d-flex flex-column h-100'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>User Profile Card</Card.Title>
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
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfile

