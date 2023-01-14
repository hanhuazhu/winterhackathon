import './Drug.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Component, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './logo.svg';
import BarGraph1 from './Bar-graph';
import PieGraph1 from './Pie-chart';
import SearchBar from './Drug-search-bar';

function Drug() {
    
    const [foundAdverseEvents, setAdverseEvents] = useState({
        "ade": ["ONE", "TWO", "THREE", "FOUR", "FIVE"], 
        "amount": [100,200,300,400,500]
    })
    const [foundTest, setTest] = useState({
        "info": ["ONE"],
        "problem": ["TWO"]
    })

    useEffect(() => {
        // console.log('foundAdverseEvents within Drug.js', foundAdverseEvents)
    }, [foundAdverseEvents])
    useEffect(() => {
        // console.log('foundTest within Drug.js', foundTest)
    }, [foundTest])
    

    return (
        <Container style={{ 
            backgroundImage: `url("/Drug.svg")` 
            }}>
            <Col className='p-0 ms-2 mt-2'>
                
            </Col>
            <Col>
                
                <Row>
                    <h1>DRUG SEARCHER</h1>
                    
                </Row>
                <Row>
                    <SearchBar setAdverseEvents={setAdverseEvents} setTest={setTest} />
                </Row>
                
            </Col>
            <Col>
                <Row>
                    <Row>
                        <Col>
                           { /* <Bargraph />*/}
                        </Col>
                        <Col>
                            <PieGraph1 foundAdverseEvents={foundAdverseEvents} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {foundTest.info}
                        </Col>
                        <Col>
                            {foundTest.problems}
                        </Col>

                    </Row>
                    
                </Row>
            </Col>
        </Container>
    )
}

export default Drug