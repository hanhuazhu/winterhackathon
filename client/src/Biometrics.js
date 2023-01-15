import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo_2.svg';
import { Component } from 'react';
import { Button, Form } from 'react-bootstrap';



class Biometrics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            weight: '',
            age: '',
            BMI: '',
            bloodpressure: '',
            pulse: '',
            fbg: '',
            exercisehistory: '',
            smoking: '',
            currentexercise: '',
            cholesterollevels: '',
            triglycerides: '',
        }
        
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleBMIChange = this.handleBMIChange.bind(this);
        this.handleBloodPressureChange = this.handleBloodPressureChange.bind(this);
        this.handlePulseChange = this.handlePulseChange.bind(this);
        this.handlefBGChange = this.handlefBGChange.bind(this);
        this.handleExerciseHistoryChange = this.handleExerciseHistoryChange.bind(this);
        this.handleSmokingChange = this.handleSmokingChange.bind(this);
        this.handleCurrentExerciseChange = this.handleCurrentExerciseChange.bind(this);
        this.handleCholesterolLevelsChange = this.handleCholesterolLevelsChange.bind(this);
        this.handleTriglyceridesChange = this.handleTriglyceridesChange.bind(this);
    }

    handleHeightChange = (event) => {
        this.setState({height: event.target.value})
    }
    handleWeightChange = (event) => {
        this.setState({weight: event.target.value})
    }
    handleAgeChange = (event) => {
      this.setState({age: event.target.value})
    }
    handleBMIChange = (event) => {
        this.setState({BMI: event.target.value})
    }
    handleBloodPressureChange = (event) => {
      this.setState({bloodpressure: event.target.value})
    }
    handlePulseChange = (event) => {
        this.setState({pulse: event.target.value})
    }
    handlefBGChange = (event) => {
      this.setState({fbg: event.target.value})
    }
    handleExerciseHistoryChange = (event) => {
      this.setState({exercisehistory: event.target.value})
    }
    handleSmokingChange = (event) => {
      this.setState({smoking: event.target.value})
    }
    handleCurrentExerciseChange = (event) => {
      this.setState({currentexercise: event.target.value})
    }
    handleCholesterolLevelsChange = (event) => {
      this.setState({cholesterollevels: event.target.value})
    }
    handleTriglyceridesChange = (event) => {
      this.setState({triglycerides: event.target.value})
    }


    handleSubmit = (event) => {
        
        event.preventDefault();
        {/* fetch */}
    }

    render() {
        return (
            <Container className='box m-0 p-0 mh-100' fluid>
                <Row className='h-100'> 
                    <Col className='text-center align-items-center justify-content-center d-flex flex-column h-100'>
                        <img src={logo} alt='My HealthCare Logo' width={300}></img>
                        <Form className='w-25'>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>Height</Form.Label>
                                <Form.Control type='text' placeholder='Enter height' autoComplete='height' onChange={this.handleHeightChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formPassword'>
                                <Form.Label>Weight</Form.Label>
                                <Form.Control type='text' placeholder='Enter weight' autoComplete='weight' onChange={this.handleWeightChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>Age</Form.Label>
                                <Form.Control type='text' placeholder='Enter age' autoComplete='age' onChange={this.handleAgeChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>BMI</Form.Label>
                                <Form.Control type='text' placeholder='Enter BMI' autoComplete='BMI' onChange={this.handleBMIChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formPassword'>
                                <Form.Label>Blood Pressure</Form.Label>
                                <Form.Control type='text' placeholder='Enter blood pressure' autoComplete='blood pressure' onChange={this.handleBloodPressureChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>Pulse</Form.Label>
                                <Form.Control type='text' placeholder='Enter pulse' autoComplete='pulse' onChange={this.handlePulseChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>fBG</Form.Label>
                                <Form.Control type='text' placeholder='Enter fbg' autoComplete='fbg' onChange={this.handlefBGChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formPassword'>
                                <Form.Label>Exercise History</Form.Label>
                                <Form.Control as="select" type='text' placeholder='Enter exercise history' autoComplete='exercise history' onChange={this.handleExerciseHistoryChange}>
                                    <option>Select history type</option>
                                    <option>athletic</option>
                                    <option>non-athletic</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>Smoking</Form.Label>
                                <Form.Control type='text' placeholder='Enter smoking status' autoComplete='smoking status' onChange={this.handleSmokingChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>Current Exercise</Form.Label>
                                <Form.Control as="select" type='text' placeholder='Enter current exercise' autoComplete='current exercise' onChange={this.handleCurrentExerciseChange}>
                                    <option>Select current level</option>
                                    <option>active</option>
                                    <option>non-active</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formPassword'>
                                <Form.Label>Cholesterol Levels</Form.Label>
                                <Form.Control type='text' placeholder='Enter cholesterol level' autoComplete='cholesterol level' onChange={this.handleCholesterolLevelsChange}/>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formUsername'>
                                <Form.Label>Triglycerides</Form.Label>
                                <Form.Control type='text' placeholder='Enter triglicerides' autoComplete='triglicerides' onChange={this.handleTriglyceridesChange}/>
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

export default Biometrics