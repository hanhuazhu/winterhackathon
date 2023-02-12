import './UserProfile.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import React from 'react';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';

const UserProfile = props => {

    const [userSession, setdata] = useState(props);
    const [user, setUser] = useState({
        name: ''
    })
    const [biometrics, setBio] = useState({
        data: ''
    })

    const getBiometrics = useCallback(() => {
        fetch(`//localhost:3001/api/v1/biometrics/${userSession.user}`)
            .then((response) => response.json())
                .then((data) => {
                    if (data.data != null) {
                        setBio({validData: true, ...data.data})
                    } else {
                        setBio({validData: false, data: ''})
                    }
                })
                    
    }, [userSession, ])

    useEffect(() => {fetch(`//localhost:3001/api/v1/user/${userSession.user}`)
        .then((response) => response.json())
            .then((data) => setUser(data.data))
                .then(() => {getBiometrics()}); }, [getBiometrics, userSession])
    

    return ( 
        <Container className='box m-0 p-0 mh-100' fluid>
            <Row className='h-100'> 
                <Col className='align-items-center justify-content-center d-flex flex-column h-100'>
                    <Button 
                        href="/Article" 
                        variant='outline-dark' 
                        size='lg'
                        className='position-absolute top-0 end-0'>
                                Recommended Articles
                    </Button>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img 
                            variant="top" 
                            src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>
                                User Info
                            </Card.Title><br/>
                            <Card.Text>
                                <strong>First Name: </strong>{user.firstName}
                            </Card.Text>
                            <Card.Text>
                                <strong>Last Name: </strong>{user.lastName}
                            </Card.Text><br/>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='align-items-center justify-content-center d-flex flex-column h-100'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Biometrics</Card.Title><br/>
                            {!biometrics.validData ? <Card.Subtitle>No biometric information available</Card.Subtitle> : 
                                <div>
                                    <Card.Text>
                                        {biometrics.height}
                                    </Card.Text>
                                    <Card.Text>
                                        {biometrics.weight}
                                    </Card.Text>
                                    <Card.Text>
                                        {biometrics.age}
                                    </Card.Text>
                                    <Card.Text>
                                        {biometrics.bmi}
                                    </Card.Text>
                                    <Card.Text>
                                        {biometrics.blood_pressure}
                                    </Card.Text>
                                    <Card.Text>
                                        {biometrics.pulse}
                                    </Card.Text>
                                    <Card.Text>
                                        {biometrics.fbg}
                                    </Card.Text>
                                    <Card.Text>
                                        {biometrics.exercise_history}
                                    </Card.Text>
                                    <Card.Text>
                                        {biometrics.smoking}
                                    </Card.Text>
                                    <Card.Text>
                                        {biometrics.cholesterol_levels}
                                    </Card.Text>
                                </div>
                            }<br/>
                            <Button href='/Biometrics' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfile