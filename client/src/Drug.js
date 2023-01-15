import './Drug.css';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import logo from './logo_2.svg';
import { Component, useState, useEffect } from 'react';
import './logo.svg';
import PieGraph1 from './Pie-chart';
import SearchBar from './Drug-search-bar';

function Drug() {
    
    const [foundAdverseEvents, setAdverseEvents] = useState({})
    const [foundTest, setTest] = useState({})

    useEffect(() => {}, [foundAdverseEvents])
    useEffect(() => {}, [foundTest])

    return (
        <Container className=".container-fluid">
            <a href='/'>
                <img src={logo} alt='My HealthCare Logo' width={200}></img>
            </a>
            <Row>
                <Col className='align-items-center justify-content-center d-flex flex-column h-200'>
                    <div className='w-10'>
                        <div className='mb-3'>
                            <h1>Drug Search</h1>
                        </div>
                        <div className='mb-3'>
                            <SearchBar setAdverseEvents={setAdverseEvents} setTest={setTest} />
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={7} className='right-column'>
                    <PieGraph1 foundAdverseEvents={foundAdverseEvents} />
                </Col>
            </Row>
            <Row className='information'>
                <Col>
                    {foundTest.info}
                </Col>
                <Col>
                    {foundTest.problems}
                </Col>
            </Row>
        </Container>
    )
}

export default Drug