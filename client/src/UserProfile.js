import './UserProfile.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import React from 'react';
import { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

const UserProfile = props => {

    const navigate = useNavigate()

    const [userSession, setdata] = useState(props);
    const [user, setUser] = useState({
        name: ''
    })
    const [biometrics, setBio] = useState({
        data: ''
    })

    const getBiometrics = useCallback(() => {
        fetch(`https://healthtracerapi.onrender.com/api/v1/biometrics/${userSession.user}`)
            .then((response) => response.json())
                .then((data) => {
                    if (data.data != null) {
                        setBio({validData: true, ...data.data})
                    } else {
                        setBio({validData: false, data: ''})
                    }
                })
                    
    }, [userSession, ])

    useEffect(() => {fetch(`https://healthtracerapi.onrender.com/api/v1/user/${userSession.user}`)
        .then((response) => response.json())
            .then((data) => setUser(data.data))
                .then(() => {getBiometrics()}); }, [getBiometrics, userSession])
    
    const navigateToBiometrics = () => navigate('/Biometrics')

    return ( 
        <Container className='box m-0 p-0 mh-100' fluid>
            <Row className='h-100'> 
                <Col className='align-items-center justify-content-center d-flex flex-column h-100'>
                    <h1 className='my-4'>Welcome!</h1>
                    <Card style={{ width: '18rem' }}>
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
                            <Button variant="primary">Update User Info</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='align-items-center justify-content-center d-flex flex-column h-100'>
                    <Button 
                        href="/Article" 
                        variant='outline-dark' 
                        size='lg'
                        className='my-4'>
                                Recommended Articles
                    </Button>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Biometrics</Card.Title><br/>
                            {!biometrics.validData ? <Card.Subtitle>No biometric information available</Card.Subtitle> : 
                                <div>
                                    <Card.Text>
                                        Height: {biometrics.height}
                                    </Card.Text>
                                    <Card.Text>
                                        Weight: {biometrics.weight}
                                    </Card.Text>
                                    <Card.Text>
                                        Age: {biometrics.age}
                                    </Card.Text>
                                    {
                                    (biometrics.bmi < 18.5) ? 
                                        <Card.Text className='text-danger'>
                                            BMI: {biometrics.bmi} (Underweight)
                                        </Card.Text> :
                                        (biometrics.bmi > 25.0) ? 
                                            <Card.Text className='text-danger'>
                                               BMI: {biometrics.bmi} (Overweight)
                                            </Card.Text> :
                                            <Card.Text>
                                                BMI: {biometrics.bmi}
                                            </Card.Text>
                                    }
                                    {
                                        (biometrics.blood_pressure.split('/')[0] < 90) ? 
                                            <Card.Text className='text-danger'>
                                                BP: {biometrics.blood_pressure} (Low)
                                            </Card.Text> :
                                            (biometrics.blood_pressure.split('/')[0] > 130) ? 
                                                <Card.Text className='text-danger'>
                                                    BP: {biometrics.blood_pressure} (High)
                                                </Card.Text> :
                                                <Card.Text>
                                                    BP: {biometrics.blood_pressure}
                                                </Card.Text>
                                    }
                                    {
                                        (biometrics.pulse > 100) ?
                                            <Card.Text className='text-danger'>
                                                Pulse: {biometrics.pulse}
                                            </Card.Text> :
                                            <Card.Text>
                                                Pulse: {biometrics.pulse}
                                            </Card.Text>
                                    }
                                    <Card.Text>
                                        Blood Sugar: {biometrics.fbg}
                                    </Card.Text>
                                    <Card.Text>
                                        Exercise History: {biometrics.exercise_history}
                                    </Card.Text>
                                    <Card.Text>
                                        Current Activity: {biometrics.current_exercise}
                                    </Card.Text>
                                    <Card.Text>
                                        Cholesterol: {biometrics.cholesterol_levels}
                                    </Card.Text>
                                </div>
                            }<br/>
                            <Button onClick={navigateToBiometrics} variant="primary">Update Biometrics</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfile