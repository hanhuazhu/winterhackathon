import { useState } from 'react';
import { Container, Row, Col, Button, Form, ModalBody } from 'react-bootstrap';
import './Biometrics.css'
import logo from './logo_2.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';



const Biometrics = (props) => {

    const navigate = useNavigate()
    const username = useSelector((state) => state.userSession.currentUser)
    const [biometrics, setBio] = useState({'username':username})

    const setField = (field, value) => {
        setBio({
            ...biometrics,
            [field]:value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://healthtracerapi.onrender.com/api/v1/biometrics/${username}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(biometrics)
        })
        .then((response) => response.json())
            .then((data) => {
                if (data.status === "OK") {
                    navigate(`/UserProfile/${username}`)
                }
                else {
                    console.log(data.data.error);
                }
            })
    }

    return (
        <Container className='box m-0 p-3 h-100' fluid>
            <Row className='h-100'> 
                <Col className='text-center align-items-center justify-content-center d-flex flex-column'>
                    <img src={logo} alt='My HealthCare Logo' width={300}></img>
                    <Form className='w-25' onSubmit={handleSubmit}>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formUsername'>
                            <Form.Label>Height (Inches)</Form.Label>
                            <Form.Control 
                                required
                                type='number' 
                                placeholder='Enter height' 
                                name='height' 
                                onChange={(e) => setField(e.target.name, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formPassword'>
                            <Form.Label>Weight (Lbs.)</Form.Label>
                            <Form.Control 
                                required
                                type='number' 
                                placeholder='Enter weight' 
                                name='weight' 
                                onChange={(e) => setField(e.target.name, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formUsername'>
                            <Form.Label>Age</Form.Label>
                            <Form.Control 
                                required
                                type='number' 
                                placeholder='Enter age' 
                                name='age' 
                                onChange={(e) => setField(e.target.name, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formUsername'>
                            <Form.Label>BMI</Form.Label>
                            <Form.Control 
                                required
                                type='number' 
                                placeholder='Enter BMI' 
                                name='bmi' 
                                onChange={(e) => setField(e.target.name, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formPassword'>
                            <Form.Label>Blood Pressure (e.g. 120/80)</Form.Label>
                            <Form.Control 
                                required
                                type='text' 
                                pattern='[0-9]+\/[0-9]{2,3}' 
                                placeholder='Enter blood pressure' 
                                name='blood_pressure' 
                                onChange={(e) => setField(e.target.name, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formUsername'>
                            <Form.Label>Pulse</Form.Label>
                            <Form.Control 
                                required
                                type='number' 
                                placeholder='Enter pulse' 
                                name='pulse' 
                                onChange={(e) => setField(e.target.name, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formUsername'>
                            <Form.Label>Blood Sugar</Form.Label>
                            <Form.Control  
                                required
                                type='number' 
                                placeholder='Enter fbg' 
                                name='fbg' 
                                onChange={(e) => setField(e.target.name, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formPassword'>
                            <Form.Label>Exercise History</Form.Label>
                            <Form.Control
                                required 
                                as="select" 
                                type='text' 
                                placeholder='Enter exercise history' 
                                name='exercise_history' 
                                onChange={(e) => setField(e.target.name, e.target.value)}>
                                <option>Select history type</option>
                                <option>Athletic</option>
                                <option>Non-athletic</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formUsername'>
                            <Form.Label>Smoking</Form.Label>
                            <Form.Control 
                            required
                            as='select' 
                            type='text' 
                            placeholder='Enter smoking status' 
                            name='smoking' 
                            onChange={(e) => setField(e.target.name, e.target.value)}>
                                <option>Select smoking history</option>
                                <option value={true}>Smoker</option>
                                <option value={false}>Non-Smoker</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formUsername'>
                            <Form.Label>Current Exercise</Form.Label>
                            <Form.Control 
                                required
                                as="select" 
                                type='text' 
                                placeholder='Enter current exercise' 
                                name='current_exercise' 
                                onChange={(e) => setField(e.target.name, e.target.value)}>
                                <option>Select current level</option>
                                <option>Active</option>
                                <option>Non-Active</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formPassword'>
                            <Form.Label>Cholesterol Levels</Form.Label>
                            <Form.Control 
                                required
                                type='number' 
                                placeholder='Enter cholesterol level' 
                                name='cholesterol_levels' 
                                onChange={(e) => setField(e.target.name, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group 
                            className='mb-3' 
                            controlId='formUsername'>
                            <Form.Label>Triglycerides</Form.Label>
                            <Form.Control
                                required
                                type='number' 
                                placeholder='Enter triglycerides' 
                                name='triglycerides' 
                                onChange={(e) => setField(e.target.name, e.target.value)} 
                            />
                        </Form.Group>
                        <Button 
                            variant='info' 
                            type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
    
}

export default Biometrics